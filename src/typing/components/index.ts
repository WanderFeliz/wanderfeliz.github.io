// This file contains the types for the components in the portfolio app
// and is used to define the props or related types for the components.


// Navigation types
export type ButtonProps = {
  text: string;
  url: string;
  variant?: 'default' | 'primary' | 'secondary' | 'primary-flex' | 'secondary-flex';
  isExternal?: boolean;
  isDisabled?: boolean;
  className?: string;
};

export type NavLinkType = {
  id: number,
  title: string,
  url: string,
};
