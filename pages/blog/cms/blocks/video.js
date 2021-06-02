import {
  width,
  height,
  debug,
} from '../fields';


const video = {
  name: 'video',
  label: 'Vídeo',
  description: 'Link do vídeo',
  component: 'text',
};


const VideoBlock = {
  label: 'Vídeo',
  name: 'video',
  fields: [
    video,
    width,
    height,
    debug,
  ],
};


export default VideoBlock;
