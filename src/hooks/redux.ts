import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispach = () => useDispatch<AppDispatch>();
export const useAppSelcetor: TypedUseSelectorHook<RootState> = useSelector;
