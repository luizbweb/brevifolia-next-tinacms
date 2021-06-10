import { ResponsiveImage } from "~types/ResponsiveImage";


export interface Action {
  readonly text?: string;
  readonly link?: string;
}

export interface Background {
  readonly color?: string;
  readonly opacity?: number;
}

export interface Content {
  readonly link?: string;
  readonly title?: string;
  readonly content?: string;
  readonly font_size?: string;
  readonly font_weight?: string;
  readonly text_alignment?: string;
  readonly line_height?: string;
  readonly margin_top?: string;
  readonly margin_bottom?: string;
  readonly foreground?: string;
  readonly image?: ResponsiveImage;
  readonly objectPosition?: string;
  readonly objectFit?: string;
  readonly actions?: ReadonlyArray<Action>;
  readonly width?: string;
  readonly height?: string;
  readonly debug?: boolean;
}

export interface Block {
  readonly _template?: string;
}

export interface Props {
  readonly className?: string;
  readonly content?: ReadonlyArray<Partial<Content> & Block>;
  readonly horizontal_alignment?: string;
  readonly vertical_alignment?: string;
  readonly padding_left?: string;
  readonly padding_right?: string;
  readonly background_color_alpha?: Background;
  readonly height?: string;
  readonly width?: string;
  readonly stretch?: boolean;
  readonly screen?: string;
  readonly debug?: boolean;
}
