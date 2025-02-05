import { createSlice } from "@reduxjs/toolkit";
import { Message } from "../../types/types";

export interface ChatState {
  isLoaded: boolean;
  messages: Message[];
  inputText: string;
}

const initialState: ChatState = {
  isLoaded: false,
  messages: [],
  inputText: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChat: (state) => {
      state.isLoaded = false;
      state.messages = [];
      state.inputText = "";
    },
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export const { resetChat, setIsLoaded, setMessages, setInputText } =
  chatSlice.actions;

export default chatSlice.reducer;
