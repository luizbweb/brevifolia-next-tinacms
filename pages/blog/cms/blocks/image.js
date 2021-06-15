import {
  mobileImage,
  desktopImage,
  width,
  height,
  link,
  debug,
} from "../fields";

const _desktopImage = {
  name: "desktop_image",
  label: "Desktop",
  component: "image",
  parse: (media) => `/static/${media.filename}`,
  uploadDir: () => "/public/static/",
  previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
};

const _mobileImage = {
  name: "mobile_image",
  label: "Mobile",
  component: "image",
  parse: (media) => `/static/${media.filename}`,
  uploadDir: () => "/public/static/",
  previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
};

const image = {
  name: "image",
  label: "Imagem",
  component: "group",
  fields: [_desktopImage, _mobileImage],
};

const objectFit = {
  name: "objectFit",
  label: "Ajuste da imagem",
  component: "select",
  options: ["contain", "cover", "fill", "none"],
};

const objectPosition = {
  name: "objectPosition",
  label: "Posição da imagem",
  component: "select",
  options: ["top", "left", "center", "right", "bottom"],
};

const ImageBlock = {
  label: "Imagem",
  name: "image",
  fields: [
    image,
    objectFit,
    objectPosition,
    link,
    // width,
    // height,
    debug,
  ],
  defaultItem: {
    objectFit: "none",
    objectPosition: "center",
  },
};

export default ImageBlock;
