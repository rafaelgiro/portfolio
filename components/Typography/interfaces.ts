type typescaleOptions =
  | "title-1"
  | "title-4"
  | "title-5"
  | "paragraph"
  | "eyebrown";

export interface TypographyProps
  extends Pick<
    React.HTMLAttributes<HTMLElement>,
    "id" | "className" | "style"
  > {
  /**
   * HTML Component wich will be rendered on the DOM
   */
  component?: keyof JSX.IntrinsicElements;
  /**
   * Font type style to render
   */
  typeScale?: typescaleOptions;
  /**
   * Text content of the component
   */
  children?: React.ReactNode;
}
