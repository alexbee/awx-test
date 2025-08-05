import { Button, type ButtonProps } from "@/ui/Button";

import styles from "./styles.module.scss";

export const PercentageButton = ({
  percent,
  isActive,
  ...rest
}: { percent: number; isActive?: boolean } & ButtonProps) => {
  return (
    <Button className={styles.button} {...rest}>
      {isActive && (
        <div className={styles.button__bar} style={{ width: `${percent}%` }} />
      )}
      <div className={styles.button__content}>{`${percent}%`}</div>
    </Button>
  );
};
