import get from 'lodash.get';


interface ImageField {
  readonly name: string;
  readonly label: string;
  readonly description: string | null;
  readonly component: string;
  readonly uploadDir: () => string;
  readonly parse: (filename: string) => string;
  readonly previewSrc: (formValues: any, { input: any }) => unknown;
}


const createImageField = ({
  name = 'image',
  label = 'Imagem',
  description = '',
  component = 'image',
  parse: media => `/static/${media.filename}`,
  uploadDir: () => '/public/static/',
  placeholder = '/img/placeholders/1x1.png',
  type = 'fluid',
}): ImageField => ({
  name,
  label,
  description,
  component,
  uploadDir,
  parse,
  previewSrc: fullSrc => fullSrc.replace('/public', ''),
});


export default createImageField;
