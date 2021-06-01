import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { usePlugin } from 'tinacms'
import { useMarkdownForm } from 'next-tinacms-markdown'

import Layout from '../../components/Layout'

export default function BlogTemplate(props) {
  const formOptions = {
    label: 'Blog Page',
    fields: [
      {
        label: 'Imagem Principal',
        name: 'frontmatter.main_image',
        component: 'image',
        // Generate the frontmatter value based on the filename
        parse: media => `/static/${media.filename}`,
        // Decide the file upload directory for the post
        uploadDir: () => '/public/static/',
        // Generate the src attribute for the preview image.
        previewSrc: fullSrc => fullSrc.replace('/public', ''),
      },
      {
        name: 'frontmatter.title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'frontmatter.date',
        label: 'Date',
        component: 'date',
      },
      {
        name: 'frontmatter.author',
        label: 'Author',
        component: 'text',
      },
      {
        name: 'frontmatter.id', 
        label: 'ID do Produto', 
        component: 'number', 
      },
      {
        name: 'frontmatter.link', 
        label: 'Link', 
        component: 'text', 
      },
      {
        name: 'frontmatter.short_name', 
        label: 'Nome Curto', 
        component: 'text', 
      },
      {
        name: 'frontmatter.micro_name', 
        label: 'Micro Name', 
        component: 'text', 
      },
      {
        name: 'frontmatter.category', 
        label: 'Categoria', 
        component: 'text', 
      },
      {
        name: 'frontmatter.subcategory', 
        label: 'Subcategoria', 
        component: 'text', 
      },
      {
        name: 'frontmatter.type', 
        label: 'Tipo', 
        component: "select",
        options: ["simple", "variable"],
      },
      {
        name: 'frontmatter.availability', 
        label: 'Disponibilidade', 
        component: "select",
        options: ["no-stock", "in-stock"],
      },
      {
        name: 'frontmatter.description', 
        label: 'Descrição', 
        component: 'markdown', 
      },
      {
        name: 'frontmatter.price', 
        label: 'Preço', 
        component: 'number', 
      },
      {
        name: 'frontmatter.featured_image',
        label: 'Imagem Destacada',
        component: 'image',
        parse: media => `/static/${media.filename}`,
        uploadDir: () => '/public/static/',
        previewSrc: fullSrc => fullSrc.replace('/public', ''),
      },
      {
        name: 'frontmatter.galleries',
        label: 'Galeria',
        component: 'group-list',
        description: 'Galeria de produtos',
        itemProps: item => ({
          label: item.name,
        }),
        defaultItem: () => ({
          id: 0,
        }),
        fields: [
          {
            name: 'id', 
            label: 'ID', 
            component: 'number',
          },
          {
            name: 'color', 
            label: 'Cor', 
            component: 'text',
          },
          {
            name: 'color_code', 
            label: 'Cor RGB', 
            component: 'text', 
          },
          {
            name: 'availability', 
            label: 'Disponibilidade', 
            component: "select",
            options: ["no-stock", "in-stock"],
          },
          {
            label: 'Slides',
            name: 'slides',
            component: 'group-list',
            description: 'Fotos do produto',
            itemProps: item => ({
              label: item.name,
            }),
            defaultItem: () => ({
              image: '/static/error.png',
            }),
            fields: [
              {
                name: 'image',
                label: 'Imagem',
                component: 'image',
                parse: media => `/static/${media.filename}`,
                uploadDir: () => '/public/static/',
                previewSrc: fullSrc => fullSrc.replace('/public', ''),
              },
            ],
          },
        ],
      },
      /*
        title
        link
        image
       */
      {
        label: 'Slides',
        name: 'slides',
        component: 'group-list',
        description: 'Produtos da categoria',
        itemProps: item => ({
          label: item.name,
        }),
        defaultItem: () => ({
          title: 'Novo slide',
        }),
        fields: [
          {
            name: 'title', 
            label: 'Titulo', 
            component: 'text',
          },
          {
            name: 'link', 
            label: 'Link', 
            component: 'text',
          },
          {
            name: 'image',
            label: 'Imagem',
            component: 'image',
            parse: media => `/static/${media.filename}`,
            uploadDir: () => '/public/static/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
          },
        ],
      },
      {
        name: 'frontmatter.slides', 
        label: 'Slides', 
        component: 'text', 
      },
      {
        name: 'frontmatter.menu', 
        label: 'Menu', 
        component: 'text', 
      },
      {
        name: 'frontmatter.details', 
        label: 'Detalhes', 
        component: 'text', 
      },
      {
        name: 'frontmatter.specs', 
        label: 'Especificações', 
        component: 'text', 
      },
      {
        name: 'markdownBody',
        label: 'Blog Body',
        component: 'markdown',
      },
    ],
  }

  const [post, form] = useMarkdownForm(props.markdownFile, formOptions)
  usePlugin(form)

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <Layout siteTitle={props.title}>
      <article className="blog">
        <figure className="blog__hero">
          <img
            src={post.frontmatter.main_image}
            alt={`blog_hero_${post.frontmatter.title}`}
          />
        </figure>
        <div className="blog__info">
          <h1>{post.frontmatter.title}</h1>
          <h3>{reformatDate(post.frontmatter.date)}</h3>
        </div>
        <div className="blog__body">
          <ReactMarkdown source={post.markdownBody} />
        </div>
        <h2 className="blog__footer">Written By: {post.frontmatter.author}</h2>
      </article>
      <style jsx>
        {`
          .blog h1 {
            margin-bottom: 0.7rem;
          }

          .blog__hero {
            min-height: 300px;
            height: 60vh;
            width: 100%;
            margin: 0;
            overflow: hidden;
          }
          .blog__hero img {
            margin-bottom: 0;
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
            object-position: center;
          }

          .blog__info {
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 768px;
            margin: 0 auto;
          }
          .blog__info h1 {
            margin-bottom: 0.66rem;
          }
          .blog__info h3 {
            margin-bottom: 0;
          }

          .blog__body {
            width: 100%;
            padding: 0 1.25rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .blog__body a {
            padding-bottom: 1.5rem;
          }
          .blog__body:last-child {
            margin-bottom: 0;
          }
          .blog__body h1 h2 h3 h4 h5 h6 p {
            font-weight: normal;
          }
          .blog__body p {
            color: inherit;
          }
          .blog__body ul {
            list-style: initial;
          }
          .blog__body ul ol {
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            padding-left: 1.45rem;
          }

          .blog__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }
          .blog__footer h2 {
            margin-bottom: 0;
          }
          .blog__footer a {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .blog__footer a svg {
            width: 20px;
          }

          @media (min-width: 768px) {
            .blog {
              display: flex;
              flex-direction: column;
            }
            .blog__body {
              max-width: 800px;
              padding: 0 2rem;
            }
            .blog__body span {
              width: 100%;
              margin: 1.5rem auto;
            }
            .blog__body ul ol {
              margin-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .blog__hero {
              min-height: 600px;
              height: 75vh;
            }
            .blog__info {
              text-align: center;
              padding: 2rem 0;
            }
            .blog__info h1 {
              max-width: 500px;
              margin: 0 auto 0.66rem auto;
            }
            .blog__footer {
              padding: 2.25rem;
            }
          }

          @media (min-width: 1440px) {
            .blog__hero {
              height: 70vh;
            }
            .blog__info {
              padding: 3rem 0;
            }
            .blog__footer {
              padding: 2rem 2rem 3rem 2rem;
            }
          }
        `}
      </style>
    </Layout>
  )
}

BlogTemplate.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(`../../posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default)

  return {
    markdownFile: {
      fileRelativePath: `posts/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    title: config.default.title,
  }
}
