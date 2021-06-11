import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { usePlugin } from "tinacms";
import { useMarkdownForm } from "next-tinacms-markdown";
import { Blocks, BannerBlock } from "./cms/blocks";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { ProductInfo } from "../../components/ProductInfo";
import ProductCarousel from "../../components/Carousel";
import ColorSelect from "../../components/ColorSelect";
import MainImage from "../../components/MainImage";
import { Banner } from "../../components/Banner/component";
import classNames from "classnames";
import Specs from "../../components/Specs";
import Menu from "../../components/Menu";
import CategorySlides from "../../components/CategorySlides";
const CarrouselContainer = styled.div`
  display: flex;
  padding: 0px 120px;
  margin-top: 160px;
  width: 100%;
`;

const DescriptionContainer = styled.div`
  width: 100%;
`;

export default function BlogTemplate(props) {
  const formOptions = {
    label: "Editor de Produtos",
    fields: [
      {
        label: "Imagem Principal",
        name: "frontmatter.main_image",
        component: "image",
        // Generate the frontmatter value based on the filename
        parse: (media) => `/static/${media.filename}`,
        // Decide the file upload directory for the post
        uploadDir: () => "/public/static/",
        // Generate the src attribute for the preview image.
        previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
        clearable: true,
      },
      {
        name: "frontmatter.title",
        label: "Título",
        component: "text",
      },
      {
        name: "frontmatter.id",
        label: "ID do Produto",
        component: "number",
      },
      {
        name: "frontmatter.short_name",
        label: "Nome Curto",
        component: "text",
      },
      {
        name: "frontmatter.micro_name",
        label: "Micro Name",
        component: "text",
      },
      {
        name: "frontmatter.category",
        label: "Categoria",
        component: "text",
      },
      {
        name: "frontmatter.subcategory",
        label: "Subcategoria",
        component: "text",
      },
      {
        name: "frontmatter.type",
        label: "Tipo",
        component: "select",
        options: ["simple", "variable"],
      },
      {
        name: "frontmatter.availability",
        label: "Disponibilidade",
        component: "select",
        options: ["no-stock", "in-stock"],
      },
      {
        name: "frontmatter.description",
        label: "Descrição",
        component: "markdown",
      },
      {
        name: "frontmatter.price",
        label: "Preço",
        component: "group",
        description: "Preço o produto à vista e parcelado",
        fields: [
          {
            name: "regular",
            label: "Regular",
            component: "number",
          },
          {
            name: "boleto",
            label: "boleto",
            component: "number",
          },
        ],
      },

      {
        name: "frontmatter.galleries",
        label: "Galeria",
        component: "group-list",
        description: "Galeria de Variações",
        itemProps: (item) => (
          console.log(item),
          {
            label: item.color,
          }
        ),
        defaultItem: () => ({
          id: 0,
        }),
        fields: [
          {
            name: "id",
            label: "ID",
            component: "number",
          },
          {
            name: "color",
            label: "Cor",
            component: "text",
          },
          {
            name: "color_code",
            label: "Cor RGB",
            component: "text",
          },
          {
            name: "availability",
            label: "Disponibilidade",
            component: "select",
            options: ["no-stock", "in-stock"],
          },
          {
            label: "Slides de Categoria",
            name: "slides",
            component: "group-list",
            description: "Fotos do produto",
            itemProps: (item) => ({
              label: "Imagem",
            }),
            defaultItem: () => ({
              image: "/static/error.png",
            }),
            fields: [
              {
                name: "image",
                label: "Imagem",
                component: "image",
                parse: (media) => `/static/${media.filename}`,
                uploadDir: () => "/public/static/",
                previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
              },
            ],
          },
        ],
      },
      {
        name: "frontmatter.slides",
        label: "Slides",
        component: "group-list",
        description: "Produtos da categoria",
        itemProps: (item) => (
          console.log("SLIDES", item),
          {
            label: item.title,
          }
        ),
        defaultItem: () => ({
          title: "Novo slide",
        }),
        fields: [
          {
            name: "title",
            label: "Titulo",
            component: "text",
          },
          {
            name: "link",
            label: "Link",
            component: "text",
          },
          {
            name: "image",
            label: "Imagem",
            component: "image",
            parse: (media) => `/static/${media.filename}`,
            uploadDir: () => "/public/static/",
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
          },
        ],
      },
      {
        name: "frontmatter.featured_image",
        label: "Banner em Destaque",
        component: "group",
        description: "Banner Principal do Produto",
        fields: [
          {
            name: "desktop_image",
            label: "Desktop",
            component: "image",
            parse: (media) => `/static/${media.filename}`,
            uploadDir: () => "/public/static/",
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
          },
          {
            name: "mobile_image",
            label: "Mobile",
            component: "image",
            parse: (media) => `/static/${media.filename}`,
            uploadDir: () => "/public/static/",
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
          },
        ],
      },
      Blocks,
      {
        name: "frontmatter.menu",
        label: "Menu Âncora",
        component: "group",
        fields: [
          {
            label: "Itens",
            name: "items",
            description: "Itens do menu da página de produto",
            component: "group-list",
            itemProps: (item) => (
              console.log("ss", item),
              {
                label: item.link,
              }
            ),
            defaultItem: () => ({
              title: "Novo link",
            }),
            fields: [
              {
                name: "text",
                label: "Texto",
                component: "text",
              },
              {
                name: "link",
                label: "Link",
                component: "text",
              },
            ],
          },
        ],
      },
      {
        name: "frontmatter.details",
        label: "Detalhes",
        description: "Detalhes do produto",
        component: "group-list",
        itemProps: (item) => ({
          label: item.title,
        }),
        defaultItem: () => ({
          title: "Novo detalhe",
        }),
        fields: [
          {
            name: "title",
            label: "Título",
            component: "text",
          },
          {
            name: "image",
            label: "Imagem",
            component: "image",
            parse: (media) => `/static/${media.filename}`,
            uploadDir: () => "/public/static/",
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
          },
        ],
      },
      {
        name: "frontmatter.specs",
        label: "Especificações",
        component: "group",
        fields: [
          {
            name: "front",
            label: "Imagem Frontal",
            description: "Imagem principal do produto dentro do site",

            component: "image",
            parse: (media) => `/static/${media.filename}`,
            uploadDir: () => "/public/static/",
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
            clearable: true,
          },
          {
            name: "side",
            label: "Imagem Lateral",
            component: "image",
            parse: (media) => `/static/${media.filename}`,
            uploadDir: () => "/public/static/",
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
            clearable: true,
          },
          {
            label: "Itens",
            name: "items",
            description: "Itens especificações do produto",
            component: "group-list",
            itemProps: (item) => ({
              label: item?.name,
            }),
            defaultItem: () => ({
              title: "Novo link",
            }),
            fields: [
              {
                name: "key",
                label: "Chave",
                component: "text",
              },
              {
                name: "label",
                label: "Label",
                component: "text",
              },
              {
                name: "value",
                label: "Valor",
                component: "text",
              },
              {
                name: "unit",
                label: "Unidade",
                component: "text",
              },
              {
                name: "precision",
                label: "Precisão",
                component: "text",
              },
            ],
          },
        ],
      },
    ],
  };

  const [post, form] = useMarkdownForm(props.markdownFile, formOptions);
  usePlugin(form);

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  const title = post.frontmatter.title;
  const description = post.frontmatter.description;
  const subcategory = post.frontmatter.subcategory;
  const galleries = post.frontmatter.galleries;
  const colors = galleries?.map((gallery) => gallery?.color);
  const productType = post.frontmatter.type;
  const [activeGallery, setActiveGallery] = React.useState(
    () => galleries && galleries[0]
  );
  const [chairColor, setChairColor] = React.useState("");
  const mainDesktopImage = post.frontmatter.featured_image?.desktop_image;
  const blocks = post.frontmatter.blocks;
  const specs = post.frontmatter.specs;
  const menu = post.frontmatter.menu;
  const slides = post.frontmatter.slides;
  console.log("SLIDES", slides);
  React.useEffect(() => {
    if (!galleries) return;

    const gallery = galleries.filter(
      (gallery) => gallery && gallery.color === chairColor
    )[0];

    if (gallery) setActiveGallery(gallery);
  }, [chairColor, galleries]);
  return (
    <Layout siteTitle={props.title}>
      {/* <article className="blog">
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
      </article> */}

      {galleries && (
        <CarrouselContainer>
          <ProductCarousel gallery={activeGallery} />

          <DescriptionContainer>
            <h1>
              {title} {chairColor}
            </h1>
            <h2>{subcategory}</h2>
            <ProductInfo info={description} />
            {productType == "variable" && (
              <ColorSelect
                options={colors}
                value={chairColor}
                setValue={setChairColor}
              />
            )}
          </DescriptionContainer>
        </CarrouselContainer>
      )}
      {slides && <CategorySlides slides={slides} />}

      {mainDesktopImage && <MainImage image={mainDesktopImage} />}

      {menu && <Menu items={menu.items} />}

      {blocks && (
        <div style={{ width: "100%" }}>
          {blocks.map((block, index) => {
            if (!block || !block._template) return;

            switch (block._template) {
              case "BannerBlock":
                return (
                  block.banner && (
                    <Banner
                      id={block.banner.id}
                      key={`home-block-${index}`}
                      blocks={block.banner.blocks}
                      backgroundImage={block.banner.background_image}
                      backgroundColor={block.banner.background_color}
                      horizontal_alignment={block.banner.horizontal_alignment}
                      vertical_alignment={block.banner.vertical_alignment}
                      fullWidth={block.banner.full_width}
                      stretch={block.banner.stretch}
                      margin_bottom={block.banner.margin_bottom}
                      margin_top={block.banner.margin_top}
                      height={block.banner.height}
                      debug={block.banner.debug}
                      className={classNames({
                        "mobile-card": block.banner.mobile_card,
                      })}
                    />
                  )
                );
            }
          })}
        </div>
      )}
      {specs ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ margin: "1rem 0px" }}>Especificações</h2>
          <Specs front={specs.front} side={specs.side} />
        </div>
      ) : null}

      {/* <div className="dt3_editor_log">
        <p>
          {" "}
          <b>Log do DT3editor 2.0</b>{" "}
        </p>
        <p> main_image: {post.frontmatter.main_image} </p>
        <p> title: {post.frontmatter.title} </p>
        <p> date: {post.frontmatter.date} </p>
        <p> author: {post.frontmatter.author} </p>
        <p> id: {post.frontmatter.id} </p>
        <p> link: {post.frontmatter.link} </p>
        <p> short_name: {post.frontmatter.short_name} </p>
        <p> micro_name: {post.frontmatter.micro_name} </p>
        <p> category: {post.frontmatter.category} </p>
        <p> subcategory: {post.frontmatter.subcategory} </p>
        <p> type: {post.frontmatter.type} </p>
        <p> availability: {post.frontmatter.availability} </p>
        <p> description: {post.frontmatter.description} </p>
        <p> price: </p>
        <p> regular: {JSON.stringify(post.frontmatter.price?.regular)} </p>
        <p> boleto: {JSON.stringify(post.frontmatter.price?.boleto)} </p>
        <p> featured_image: </p>
        <p>
          {" "}
          desktop_image:{" "}
          {JSON.stringify(post.frontmatter.featured_image?.desktop_image)}{" "}
        </p>
        <p>
          {" "}
          mobile_image:{" "}
          {JSON.stringify(post.frontmatter.featured_image?.mobile_image)}{" "}
        </p>
        <p> galleries: {JSON.stringify(post.frontmatter.galleries)} </p>
        <p> slides: {JSON.stringify(post.frontmatter.slides)} </p>
        <p> menu: {JSON.stringify(post.frontmatter.menu)} </p>
        <p> details: {JSON.stringify(post.frontmatter.details)} </p>
        <p> blocks: {JSON.stringify(post.frontmatter.blocks)} </p>
        <p> specs: {JSON.stringify(post.frontmatter.specs)} </p>
      </div> */}
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
          .dt3_editor_log {
            background-color: #111010;
          }
          .dt3_editor_log > p {
            color: #aaaaaa;
            margin-bottom: 5px;
            margin-left: 5px;
            font-size: small;
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
  );
}

BlogTemplate.getInitialProps = async function(ctx) {
  const { slug } = ctx.query;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);

  return {
    markdownFile: {
      fileRelativePath: `posts/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    title: config.default.title,
  };
};
