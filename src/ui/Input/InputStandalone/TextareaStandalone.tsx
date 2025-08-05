import cn from "clsx";
import { type TextareaHTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type TextareaStandaloneProps =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaStandalone = ({
  className,
  ...rest
}: TextareaStandaloneProps) => {
  return (
    <textarea
      className={cn(styles.input, styles.textarea, className)}
      {...rest}
    />
  );
};
