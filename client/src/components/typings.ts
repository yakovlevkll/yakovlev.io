export interface ILinkButton {
  title: string;
  href: string;
  colors: {
    bgr: string;
    text: string;
  };
}

export interface IInfo {
  title: string;
  desc: string;
}

export interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ILink {
  name: string;
  to: string;
  isCurrent?: boolean;
}

export interface IIconLink extends ILink {
  icon: any;
}
