import { useSelector } from "react-redux";
import type { AppState } from "@/store/types.ts";

export const useAppSelector = useSelector.withTypes<AppState>();
