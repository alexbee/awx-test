import { useLayoutEffect, useRef, useState } from "react";

import { InputStandalone, type InputStandaloneProps } from "../InputStandalone";
import styles from "./styles.module.scss";

export const InputWithCurrency = ({
  id,
  currency,
  value,
  ...rest
}: {
  id: string;
  currency: string;
} & InputStandaloneProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState(50);

  useLayoutEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;

      if (value) {
        setInputWidth(width + 5);
      } else {
        setInputWidth(50);
      }
    }
  }, [value]);

  return (
    <div className={styles.input}>
      <div className={styles.input__container}>
        <InputStandalone
          id={id}
          ref={inputRef}
          style={{ width: inputWidth }}
          className={styles.input__control}
          value={value}
          {...rest}
        />
        <span ref={spanRef} className={styles.input__fake}>
          {value || " "}
        </span>
      </div>
      <label htmlFor={id} className={styles.input__label}>
        {currency}
      </label>
    </div>
  );
};
