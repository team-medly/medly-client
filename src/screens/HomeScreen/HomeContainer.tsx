import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { useDispatch } from "react-redux";

import HomePresenter from "./HomePresenter";
import { RootStackParamList } from "../../types/types";
import { AppDispatch } from "../../store/store";
import { getUserLogsByPatientId } from "../../store/root/rootActions";

type Props = StackScreenProps<RootStackParamList, "Home">;

export default function HomeContainer({}: Props) {
  const dispatch: AppDispatch = useDispatch();

  const preloadHome = () => {
    dispatch(getUserLogsByPatientId({ patientId: 12345 }));
  };

  useEffect(() => {
    preloadHome();

    return () => {};
  }, [preloadHome, dispatch]);

  return <HomePresenter isLoaded={true} />;
}
