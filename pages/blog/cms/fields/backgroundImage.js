import get from 'lodash.get';

const backgroundImage = {
  label: 'Imagem de Background',
  name: 'background_image',
  component: 'image',
  parse: media => `/static/${media.filename}`,
  uploadDir: () => '/public/static/',
  previewSrc: fullSrc => fullSrc.replace('/public', ''),
};


export default backgroundImage;
