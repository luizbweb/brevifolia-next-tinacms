import {
  foreground,
  marginTop,
  marginBottom,
  textAlignment,
  lineHeight,
  fontWeight,
  fontSize,
  debug,
} from "../fields";

const content = {
  name: "content",
  label: "Conteúdo",
  component: "markdown",
};

export const ContentBlock = {
  label: "Conteúdo",
  name: "content",
  defaultItem: {
    content: "",
  },
  fields: [
    content,
    foreground,
    // fontSize,
    // fontWeight,
    // lineHeight,
    // textAlignment,
    // marginTop,
    // marginBottom,
    debug,
  ],
};

export default ContentBlock;
