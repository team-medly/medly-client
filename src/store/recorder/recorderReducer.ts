import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RecorderState {
  isLoaded: boolean;
}

const initialState: RecorderState = {
  isLoaded: false,
};

export const recorderSlice = createSlice({
  name: "recorder",
  initialState,
  reducers: {
    resetRecorder: (state) => {
      state.isLoaded = false;
    },
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { resetRecorder, setIsLoaded } = recorderSlice.actions;

export default recorderSlice.reducer;
