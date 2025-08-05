import type { UseFormReturn } from "react-hook-form";

import { Percentage } from "@/components/Percentage/Percentage.tsx";
import type { Token } from "@/store/swap/types";
import { Button } from "@/ui/Button/Button";
import { InputWithCurrency } from "@/ui/Input/InputWithCurrency";
import { Section } from "@/ui/Section";
import { Spacer } from "@/ui/Spacer";
import { Type } from "@/ui/Type";
import { handleNumericInputKeyDown, validatePositiveNumber } from "@/utils";

import styles from "./styles.module.scss";

type Props = {
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  toAmount: string;
  onFromAmountChange: (value: string) => void;
  onToAmountChange: (value: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  error?: string;
};

export const Swap = ({
  fromToken,
  toToken,
  fromAmount,
  toAmount,
  onFromAmountChange,
  onToAmountChange,
  onSubmit,
  form,
  error,
}: Props) => {
  return (
    <Section>
      {error && <Type>{error}</Type>}
      <form onSubmit={onSubmit}>
        <div className={styles.grid}>
          <div className={styles.grid__control}>
            <InputWithCurrency
              id="fromAmount"
              // type="number"
              step="any"
              min="0"
              placeholder={`0.0`}
              value={fromAmount}
              autoComplete="off"
              inputMode="decimal"
              pattern="^[0-9]*[.]?[0-9]*$"
              onKeyDown={(e) => handleNumericInputKeyDown(e)}
              {...form.register("fromAmount", {
                valueAsNumber: true,
                validate: validatePositiveNumber,
              })}
              onChange={(e) => onFromAmountChange(e.target.value)}
              currency={fromToken.symbol}
            />
            <Spacer margin={8} />
            <Percentage />
          </div>
          <div className={styles.grid__control}>
            <InputWithCurrency
              id="toAmount"
              // type="number"
              step="any"
              min="0"
              placeholder={`0.0`}
              value={toAmount}
              autoComplete="off"
              inputMode="decimal"
              pattern="^[0-9]*[.]?[0-9]*$"
              onKeyDown={(e) => handleNumericInputKeyDown(e)}
              {...form.register("toAmount", {
                valueAsNumber: true,
                validate: validatePositiveNumber,
              })}
              onChange={(e) => onToAmountChange(e.target.value)}
              currency={toToken.symbol}
            />
            <Spacer margin={8} />
            <Percentage />
          </div>
        </div>
        <Spacer margin={24} />
        <Button>Обменять</Button>
      </form>
    </Section>
  );
};
