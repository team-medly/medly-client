export type RootStackParamList = {
  MainBottom: undefined;
  Home: undefined;
  Document: undefined;
  Recorder: { idx: number };
  Chat: { modelName: string };
};

export type EntryStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type Message = {
  idx: number;
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
  idx: number;
  patientId: string;
  name: string;
  dateOfBirth: Date;
  scheduledAt: Date;
  status: boolean;
};
