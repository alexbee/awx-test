import { PercentageButton } from "./PercentageButton.tsx";
import styles from "./styles.module.scss";

export const Percentage = () => {
  return (
    <div className={styles.percentageGrid}>
      <PercentageButton type="button" percent={25} />
      <PercentageButton type="button" percent={50} />
      <PercentageButton type="button" isActive percent={75} />
      <PercentageButton type="button" percent={100} />
    </div>
  );
};
