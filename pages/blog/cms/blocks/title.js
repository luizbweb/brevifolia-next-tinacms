import {
  debug,
  fontSize,
  fontWeight,
  lineHeight,
  textAlignment,
  marginBottom,
  marginTop,
  foreground,
} from "../fields";

const title = {
  name: "title",
  label: "Título",
  component: "text",
};

export const TitleBlock = {
  label: "Título",
  name: "title",
  defaultItem: {
    title: "",
  },
  fields: [
    title,
    foreground,
    // textAlignment,
    // fontSize,
    // fontWeight,
    // lineHeight,
    // marginTop,
    // marginBottom,
    debug,
  ],
};

export default TitleBlock;
