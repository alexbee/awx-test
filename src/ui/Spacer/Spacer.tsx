import cn from "clsx";
import type { FC, HTMLAttributes } from "react";

import styles from "./styles.module.scss";

type SpacerValues = 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 42 | 52;

export type SpacerProps = {
  margin?: SpacerValues;
  xsMargin?: SpacerValues;
  marginRight?: SpacerValues;
  xsMarginRight?: SpacerValues;
  marginLeft?: SpacerValues;
};

export const Spacer: FC<HTMLAttributes<HTMLDivElement> & SpacerProps> = ({
  className,
  xsMargin,
  margin = 16,
  marginRight,
  xsMarginRight,
  ...rest
}) => {
  return (
    <div
      className={cn([
        className,
        styles[`spacer_margin_${margin}`],
        styles[`spacer_xsMargin_${xsMargin}`],
        styles[`spacer_xsMarginRight_${xsMarginRight}`],
        marginRight && styles[`spacer_marginRight_${marginRight}`],
      ])}
      {...rest}
    />
  );
};
