import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uploadVoiceRecord } from "./recorderActions";

export interface RecorderState {
  isLoaded: boolean;
  isSaving: boolean;
}

const initialState: RecorderState = {
  isLoaded: true,
  isSaving: false,
};

export const recorderSlice = createSlice({
  name: "recorder",
  initialState,
  reducers: {
    resetRecorder: (state) => {
      state.isLoaded = true;
      state.isSaving = false;
    },
    setIsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setIsSaving: (state, action: PayloadAction<boolean>) => {
      state.isSaving = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadVoiceRecord.fulfilled, (state, action) => {
      console.log("uploadVoiceRecord.fulfilled", action);
    });
    builder.addCase(uploadVoiceRecord.rejected, (_, action) => {
      console.error("uploadVoiceRecord.rejected", action);
    });
  },
});

export const { resetRecorder, setIsLoaded, setIsSaving } =
  recorderSlice.actions;

export default recorderSlice.reducer;
