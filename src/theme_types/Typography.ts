export type TypographyVariants =
  | 'min'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'max';

export interface TypographyType {
  variant?: TypographyVariants;
  lineHeightVariant?: TypographyVariants;
  children?: string | string[] | any;
  textRef?: any;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
}
