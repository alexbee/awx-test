import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type PriceResponse = {
  inAmount: string;
  outAmount: string;
  isStraight: boolean;
  price: [string, string];
};

type PriceRequest = {
  pairId: number;
  inAmount: string | null;
  outAmount: string | null;
  isStraight: boolean;
};

export const swapApi = createApi({
  reducerPath: "tokenSwapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: (headers) => {
      headers.set("serial", "a7307e89-fbeb-4b28-a8ce-55b7fb3c32aa");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPrice: builder.query<PriceResponse, PriceRequest>({
      query: (body) => ({
        url: "/b2api/change/user/pair/calc",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPriceQuery } = swapApi;
