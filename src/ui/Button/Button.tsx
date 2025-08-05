import cn from "clsx";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ElementType,
  forwardRef,
  type HTMLAttributes,
} from "react";

import styles from "./styles.module.scss";

export type ButtonProps = {
  tag?: "div" | "button" | "a" | "span";
  variant?:
    | "default"
    | "unstyled"
    | "outline"
    | "lightGray3"
    | "outlineGrey5"
    | "lightSecondary1";
  size?: "default" | "sm" | "lg";
  isInline?: boolean;
  isSquare?: boolean;
} & (
  | HTMLAttributes<HTMLDivElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
  (
    {
      size = "default",
      isSquare,
      variant = "default",
      isInline,
      className,
      tag = "button",
      ...rest
    },
    ref,
  ) => {
    const ComponentTag = tag as ElementType;

    return (
      <ComponentTag
        ref={ref}
        className={cn(
          styles.button,
          className && className,
          isInline && styles.button_isInline,
          styles[`button_size_${size}`],
          styles[`button_variant_${variant}`],
          isSquare && styles.button_isSquare,
        )}
        {...rest}
      />
    );
  },
);
