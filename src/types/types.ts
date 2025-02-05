export type RootStackParamList = {
  MainBottom: undefined;
  Home: undefined;
  Chat: undefined;
};

export type EntryStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type Message = {
  id: string;
  text: string;
  type: "sent" | "received";
};
