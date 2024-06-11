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

// let ctry: string;
// let cty: string;
// const getLocation = async () => {
//   const res = await axios.get("https://ipinfo.io?token=da5bd63581ff35");
//   const data = await res.data;

//   ctry = data.country;
//   cty = data.city;
// };
// getLocation();

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
