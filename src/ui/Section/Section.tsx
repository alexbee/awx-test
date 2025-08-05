import type { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export const Section = ({ children }: PropsWithChildren) => {
  return <div className={styles.section}>{children}</div>;
};
