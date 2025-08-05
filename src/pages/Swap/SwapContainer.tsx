import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useDebounce } from "@uidotdev/usehooks";
import { setFromAmount, setToAmount, resetForm } from "@/store/swap/slice";
import { useGetPriceQuery } from "@/store/swap/api";
import { setPrice } from "@/store/swap/slice";
import { skipToken } from "@reduxjs/toolkit/query";
import { PAIRS } from "@/constants";
import { Field, type TokensByField } from "@/store/swap/types.ts";
import { useAppSelector } from "@/store/hooks.ts";

import { Swap } from "./Swap";

export const SwapContainer = () => {
  const swap = useAppSelector((state) => state.swap);
  const dispatch = useDispatch();
  const form = useForm();

  const debouncedAmountIn = useDebounce(swap.fromAmount, 300);
  const debouncedAmountOut = useDebounce(swap.toAmount, 300);

  const queryArgs =
    (swap.independentField === "INPUT" && debouncedAmountIn) ||
    (swap.independentField === "OUTPUT" && swap.toAmount)
      ? {
          pairId: swap.pairId,
          inAmount:
            swap.independentField === "INPUT" ? debouncedAmountIn : null,
          outAmount:
            swap.independentField === "OUTPUT" ? debouncedAmountOut : null,
          isStraight: swap.independentField === "INPUT",
        }
      : undefined;

  const { data: priceData } = useGetPriceQuery(queryArgs ?? skipToken, {
    refetchOnFocus: true,
    pollingInterval: 2000,
  });

  // Update price in store
  useEffect(() => {
    if (priceData?.price) {
      dispatch(setPrice(priceData.price));
    }
  }, [priceData]);

  const handleFromAmountChange = (value: string) => {
    dispatch(setFromAmount(value));
    form.setValue("toAmount", swap.toAmount);
  };

  const handleToAmountChange = (value: string) => {
    dispatch(setToAmount(value));
    form.setValue("fromAmount", swap.fromAmount);
  };

  const handleSubmit = () => {
    alert(
      `Обмен: ${swap.fromAmount} ${tokens[Field.INPUT]?.symbol} → ${swap.toAmount} ${tokens[Field.OUTPUT]?.symbol}`,
    );
    dispatch(resetForm());
    form.reset();
  };

  // Формируем структуру tokens для текущей пары
  const pair = PAIRS[swap.pairId];
  const tokens: TokensByField = {
    [Field.INPUT]: pair.token1,
    [Field.OUTPUT]: pair.token2,
  };

  return (
    <Swap
      fromToken={tokens[Field.INPUT]}
      toToken={tokens[Field.OUTPUT]}
      fromAmount={swap.fromAmount}
      toAmount={swap.toAmount}
      onFromAmountChange={handleFromAmountChange}
      onToAmountChange={handleToAmountChange}
      onSubmit={form.handleSubmit(handleSubmit)}
      form={form}
    />
  );
};
