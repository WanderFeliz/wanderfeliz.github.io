export type ButtonProps = {
  text: string;
  url: string;
  variant?: 'default' | 'primary' | 'secondary' | 'primary-flex' | 'secondary-flex';
  className?: string;
};

export type NavLinkType = {
  id: number,
  title: string,
  url: string,
};
