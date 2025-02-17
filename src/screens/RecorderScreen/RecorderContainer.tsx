import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { RootStackParamList } from "../../types/types";
import RecorderPresenter from "./RecorderPresenter";
import { RootState } from "../../store/store";

type Props = StackScreenProps<RootStackParamList, "Recorder">;

export default function RecorderContainer({ navigation }: Props) {
  const { isLoaded } = useSelector((state: RootState) => state.recorder);

  const goBack = () => navigation.goBack();

  useEffect(() => {
    return () => {};
  }, []);

  return <RecorderPresenter isLoaded={isLoaded} goBack={goBack} />;
}
