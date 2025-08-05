import cn from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type InputStandaloneProps = {
  noBorder?: boolean;
  autoSave?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputStandalone = forwardRef<
  HTMLInputElement,
  InputStandaloneProps
>(({ className, noBorder, ...rest }, ref) => {
  return (
    <input
      className={cn(styles.input, className, { [styles._noBorder]: noBorder })}
      {...rest}
      ref={ref}
    />
  );
});
