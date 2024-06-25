import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

interface LocationState {
  country: string | undefined;
  city: string | undefined;
}

const initialState: LocationState = {
  country: undefined,
  city: undefined,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getCountry: (state, action: PayloadAction<string | undefined>) => {
      state.country = action.payload;
    },
    getCity: (state, action: PayloadAction<string | undefined>) => {
      state.city = action.payload;
    },
  },
});

export const { getCountry, getCity } = locationSlice.actions;

export default locationSlice.reducer;
