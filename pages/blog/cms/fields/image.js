import get from "lodash.get";

const createImageField = {
  name: "image",
  label: "Imagem",
  description: "",
  component: "image",
  parse: (media) => `/static/${media.filename}`,
  uploadDir: () => "/public/static/",
  previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
  placeholder: "/img/placeholders/1x1.png",
  type: "fluid",
};

export default createImageField;
