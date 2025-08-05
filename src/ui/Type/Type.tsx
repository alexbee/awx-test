import cn from "clsx";
import type { FC, HTMLAttributes, JSX } from "react";

import styles from "./styles.module.scss";

export type TypeProps = {
  component?: keyof Pick<
    JSX.IntrinsicElements,
    "div" | "h1" | "h2" | "h3" | "p" | "span"
  >;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "default"
    | "additional"
    | "small"
    | "extraSmall"
    | "inherit"
    | "h0";
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "text1"
    | "text2"
    | "text3"
    | "text4"
    | "success"
    | "fail"
    | "white"
    | "secondary1"
    | "lightGrey1"
    | "lightGrey2"
    | "lightGrey3"
    | "lightGrey5"
    | "lightAccent1"
    | "lightAccent2"
    | "lightAccent3";
  fontWeight?: 400 | 500 | 600 | 700;
  textTransform?: "none" | "uppercase" | "lowercase";
  textAlign?: "default" | "center" | "right" | "left";
  xsTextAlign?: "default" | "center" | "right" | "left";
  smTextAlign?: "default" | "center" | "right" | "left";
  mdTextAlign?: "default" | "center" | "right" | "left";
  textOverflow?: "default" | "ellipsis";
  textDecoration?: "default" | "lineThrough";
  preventTagReplace?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Type: FC<TypeProps> = ({
  component = "div",
  className,
  variant = "default",
  color = "text1",
  fontWeight,
  textTransform,
  textAlign,
  xsTextAlign,
  smTextAlign,
  mdTextAlign,
  textOverflow,
  textDecoration,
  preventTagReplace,
  ...rest
}) => {
  let Component = component;

  if (variant === "h1" && !preventTagReplace) Component = "h1";
  if (variant === "h2" && !preventTagReplace) Component = "h2";

  return (
    <Component
      className={cn(styles.text, className, [
        fontWeight && styles[`text_weight_${fontWeight}`],
        styles[`text_variant_${variant}`],
        styles[`text_color_${color}`],
        textTransform && styles[`text_textTransform_${textTransform}`],
        textAlign && styles[`text_textAlign_${textAlign}`],
        xsTextAlign && styles[`text_xsTextAlign_${xsTextAlign}`],
        smTextAlign && styles[`text_smTextAlign_${smTextAlign}`],
        mdTextAlign && styles[`text_mdTextAlign_${mdTextAlign}`],
        textOverflow && styles[`text_textOverflow_${textOverflow}`],
        textDecoration && styles[`text_textDecoration_${textDecoration}`],
      ])}
      {...rest}
    />
  );
};
