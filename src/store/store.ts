import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "@/store/auth/slice";
import { authMiddleware } from "@/store/auth/middleware";

import { api } from "@/services/api";
import swapReducer from "@/store/swap/slice";
import { swapApi } from "@/store/swap/api";

const preloadedToken = localStorage.getItem("token");

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
    swap: swapReducer,
    [swapApi.reducerPath]: swapApi.reducer,
  },
  preloadedState: {
    auth: { token: preloadedToken },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      swapApi.middleware,
      authMiddleware,
    ),
});
