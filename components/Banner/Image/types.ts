import { ResponsiveImage } from '~types/ResponsiveImage';


export interface Props {
  readonly className?: string;
  readonly image?: ResponsiveImage;
  readonly objectPosition?: string;
  readonly objectFit?: string;
  readonly width?: string;
  readonly height?: string;
  readonly debug?: boolean;
  readonly link?: string;
}
