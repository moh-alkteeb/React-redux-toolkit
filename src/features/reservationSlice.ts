import { createSlice } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}
const initialState: ReservationState = {
  value: [],
};
export const reservationsSlice = createSlice({
  name: "reservations",
  initialState: initialState,
  reducers: {
    addReservation: (state, action) => {
      //   const { value } = action.payload;
      //   state.value = value;
      state.value.push(action.payload);
    },
    removeReservation: (state, action) => {
      //   const { value } = action.payload;
      //   state.value = value;

      const ss = state.value.slice(action.payload, 1);
      console.log("ss", ss);

      state.value.splice(action.payload, 1);
    },
  },
});
export const { addReservation, removeReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
