import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import locationSlice from "./reducers/location";

const store = configureStore({
  reducer: {
    location: locationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
