import {
  ImageBlock,
  VideoBlock,
  TitleBlock,
  ContentBlock,
  ActionsBlock,
} from ".";

import {
  id,
  debug,
  width,
  height,
  backgroundImage,
  backgroundColor,
  backgroundColorA,
  horizontalAlignment,
  verticalAlignment,
  paddingRight,
  paddingLeft,
  marginBottom,
  marginTop,
  fullWidth,
} from "../fields";

const content = {
  name: "content",
  label: "Conteúdo",
  component: "blocks",
  templates: {
    TitleBlock,
    ContentBlock,
    ActionsBlock,
    ImageBlock,
    VideoBlock,
  },
};

const stretch = {
  name: "stretch",
  component: "toggle",
};

const stretchBlock = {
  ...stretch,
  label: "Extender bloco",
};

const stretchBlocks = {
  ...stretch,
  label: "Extender blocos",
};

const bgImage = {
  ...backgroundImage,
  parse: media => `/static/${media.filename}`,
  uploadDir: () => '/public/static/',
  previewSrc: fullSrc => fullSrc.replace('/public', ''),
};

const mobileCard = {
  name: "mobile_card",
  label: "Card mobile?",
  component: "toggle",
};

const screen = {
  name: "screen",
  label: "Tela",
  component: "select",
  options: ["all", "desktop", "mobile"],
};

const blockName = (name) => {
  switch (name) {
    case "TitleBlock":
      return "Texto";
      break;
    case "ContentBlock":
      return "Texto";
      break;
    case "ImageBlock":
      return "Imagem";
      break;
    case "VideoBlock":
      return "Vídeo";
      break;
    case "ActionsBlock":
      return "Ações";
      break;
  }
};

const blocks = {
  name: "blocks",
  label: "Blocos",
  component: "group-list",
  fields: [
    content,
    // width,
    // height,
    horizontalAlignment,
    verticalAlignment,
    backgroundColorA,
    // paddingLeft,
    // paddingRight,
    screen,
    stretchBlock,
    debug,
  ],
  // itemProps: (item) => ({ label: blockName(item.content[0]._template) }),
  defaultItem: {
    horizontalAlignment: "center",
    verticalAlignment: "flex-start",
  },
};

const banner = {
  name: "banner",
  label: "Configurações do Banner",
  component: "group",
  fields: [
    id,
    blocks,
    // height,
    horizontalAlignment,
    // verticalAlignment,
    // marginTop,
    // marginBottom,
    bgImage,
    backgroundColor,
    fullWidth,
    stretchBlocks,
    mobileCard,
    debug,
  ],
};

const BannerBlock = {
  name: "banner",
  label: "Banner",
  fields: [banner],
  itemProps: ({ banner }) => ({
    label: banner?.id ? `#${banner.id}` : "Banner",
  }),
};

export default BannerBlock;
