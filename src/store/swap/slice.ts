import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Field } from "@/store/swap/types.ts";

export type TokenSwapState = {
  independentField: Field;
  pairId: number;
  fromAmount: string;
  toAmount: string;
  price: [string, string];
};

const initialState: TokenSwapState = {
  independentField: Field.INPUT,
  pairId: 133,
  fromAmount: "10000",
  toAmount: "",
  price: ["", ""],
};

const calculateToAmount = (fromAmount: string, price: [string, string]) => {
  const num = parseFloat(fromAmount);
  const rate = parseFloat(price[0]);
  return isNaN(num) ? "" : (num * rate).toFixed(6);
};

const calculateFromAmount = (toAmount: string, price: [string, string]) => {
  const num = parseFloat(toAmount);
  const rate = parseFloat(price[0]);
  return isNaN(num) ? "" : (num / rate).toFixed(6);
};

export const tokenSwapSlice = createSlice({
  name: "tokenSwap",
  initialState,
  reducers: {
    setFromAmount(state, action: PayloadAction<string>) {
      state.fromAmount = action.payload;
      state.independentField = Field.INPUT;
      state.toAmount = calculateToAmount(action.payload, state.price);
    },
    setToAmount(state, action: PayloadAction<string>) {
      state.toAmount = action.payload;
      state.independentField = Field.OUTPUT;
      state.fromAmount = calculateFromAmount(action.payload, state.price);
    },
    setPrice(state, action: PayloadAction<[string, string]>) {
      state.price = action.payload;
      if (state.independentField === Field.INPUT) {
        state.toAmount = calculateToAmount(state.fromAmount, state.price);
      } else {
        state.fromAmount = calculateFromAmount(state.toAmount, state.price);
      }
    },
    resetForm(state) {
      state.fromAmount = "";
      state.toAmount = "";
    },
  },
});

export const { setFromAmount, setToAmount, setPrice, resetForm } =
  tokenSwapSlice.actions;

export default tokenSwapSlice.reducer;
