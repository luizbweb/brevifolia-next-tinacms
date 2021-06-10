export interface Button {
  readonly text?: string;
  readonly link?: string;
}

export interface Props {
  readonly className?: string;
  readonly actions?: ReadonlyArray<Button>;
  readonly debug?: boolean;
}
