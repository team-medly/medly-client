import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { useDispatch } from "react-redux";

import HomePresenter from "./HomePresenter";
import { RootStackParamList } from "../../types/types";
import { AppDispatch } from "../../store/store";
// import { getUserLogsByPatientId } from "../../store/root/rootActions";

type Props = StackScreenProps<RootStackParamList, "Home">;

export default function HomeContainer({ navigation }: Props) {
  const dispatch: AppDispatch = useDispatch();

  const preloadHome = () => {
    // dispatch(getUserLogsByPatientId({ patientId: 12345 }));
  };

  const navigateToChatScreen = () => {
    navigation.navigate("Chat");
  };

  useEffect(() => {
    preloadHome();

    return () => {};
  }, [preloadHome, dispatch]);

  return (
    <HomePresenter
      isLoaded={true}
      navigateToChatScreen={navigateToChatScreen}
    />
  );
}
