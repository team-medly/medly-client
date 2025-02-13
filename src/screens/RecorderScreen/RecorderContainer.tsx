import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../../types/types";
import RecorderPresenter from "./RecorderPresenter";

type Props = StackScreenProps<RootStackParamList, "Recorder">;

export default function RecorderContainer({}: Props) {
  useEffect(() => {
    return () => {};
  }, []);

  return <RecorderPresenter isLoaded={true} />;
}
