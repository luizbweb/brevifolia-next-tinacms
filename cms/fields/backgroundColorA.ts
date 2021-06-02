import { backgroundColor, opacity } from '.';


const color = {
  ...backgroundColor,
  colorFormat: 'rgb',
  name: 'color',
  label: 'Cor',
};

const backgroundColorA = {
  name: 'background_color_alpha',
  label: 'Background',
  component: 'group',
  fields: [color, opacity],
};


export default backgroundColorA;
