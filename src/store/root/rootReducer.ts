import { AppStateStatus } from "react-native";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getUserLogsByPatientId } from "./rootActions";
import { AppState, Screens } from "../../constants/Enums";

export interface RootState {
  appState: AppStateStatus;
  currentScreen: string;
}

const initialState: RootState = {
  appState: AppState.Unknown,
  currentScreen: Screens.Home,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<AppStateStatus>) => {
      state.appState = action.payload;
    },
    setCurrentScreen: (state, action: PayloadAction<string>) => {
      state.currentScreen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserLogsByPatientId.fulfilled, (_, action) => {
      console.log("getUserLogsByPatientId.fulfilled", action);
    });
    builder.addCase(getUserLogsByPatientId.rejected, (_, action) => {
      console.error("getUserLogsByPatientId.rejected", action);
    });
  },
});

export const { setAppState, setCurrentScreen } = rootSlice.actions;

export default rootSlice.reducer;
