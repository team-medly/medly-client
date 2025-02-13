export type RootStackParamList = {
  MainBottom: undefined;
  Home: undefined;
  Document: undefined;
  Recorder: undefined;
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

export type Doctor = {
  idx: number;
  role: string;
  email: string;
  name: string;
  phone: string;
  dateOfBirth: string;
  gender: "male" | "female";
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type Patient = {
  idx: number;
};

export type PatientRecord = {
  patientId: string;
  name: string;
  dateOfBirth: Date;
  scheduledAt: Date;
  status: boolean;
};
