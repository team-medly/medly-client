import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPatientList } from "./homeActions";
import { PatientRecord } from "../../types/types";

export interface HomeState {
  isLoaded: boolean;
  patients: PatientRecord[];
}

const initialState: HomeState = {
  isLoaded: false,
  patients: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    resetHome: (state) => {
      state.isLoaded = false;
      state.patients = [];
    },
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPatientList.fulfilled, (state, action) => {
      console.log("getPatientList.fulfilled", action);

      state.patients = action.payload.patients;
      state.isLoaded = true;
    });
    builder.addCase(getPatientList.rejected, (_, action) => {
      console.error("getPatientList.rejected", action);
    });
  },
});

export const { resetHome, setIsLoaded } = homeSlice.actions;

export default homeSlice.reducer;
