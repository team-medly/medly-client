import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPatientList } from "./homeActions";
import { PatientRecord } from "../../types/types";

export interface HomeState {
  isLoaded: boolean;
  patients: PatientRecord[];
  modalVisible: boolean;
}

const initialState: HomeState = {
  isLoaded: false,
  patients: [],
  modalVisible: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    resetHome: (state) => {
      state.isLoaded = false;
      state.patients = [];
      state.modalVisible = false;
    },
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setModalVisible: (state, action: PayloadAction<boolean>) => {
      state.modalVisible = action.payload;
    },
    setRecorderIsSaving: (
      state,
      action: PayloadAction<{ idx: number; isSaving: boolean }>
    ) => {
      const { idx, isSaving } = action.payload;

      const patientArrayIndex = state.patients.findIndex(
        (patient) => patient.idx === idx
      );

      if (patientArrayIndex !== -1) {
        state.patients[patientArrayIndex].isSaving = isSaving;
      }
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

export const { resetHome, setIsLoaded, setModalVisible, setRecorderIsSaving } =
  homeSlice.actions;

export default homeSlice.reducer;
