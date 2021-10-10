import { configureStore } from "@reduxjs/toolkit";
import reservationsSlice from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
