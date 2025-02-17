import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";

import HomePresenter from "./HomePresenter";
import { RootStackParamList } from "../../types/types";
import { AppDispatch, RootState } from "../../store/store";
import { logout } from "../../store/root/rootReducer";
import { getPatientList } from "../../store/home/homeActions";
import { resetHome } from "../../store/home/homeReducer";

type Props = StackScreenProps<RootStackParamList, "Home">;

export default function HomeContainer({ navigation }: Props) {
  const { accessToken } = useSelector((state: RootState) => state.root);

  const { isLoaded, patients } = useSelector((state: RootState) => state.home);

  const dispatch: AppDispatch = useDispatch();

  const preloadHome = () => {
    dispatch(getPatientList({ accessToken }));
  };

  const navigateToChatScreen = () => {
    navigation.navigate("Chat");
  };

  const actLogout = () => {
    dispatch(logout());
  };

  const navigateToRecorderScreen = (idx: number) => {
    navigation.navigate("Recorder", { idx });
  };

  useEffect(() => {
    preloadHome();

    return () => {
      dispatch(resetHome());
    };
  }, [dispatch]);

  return (
    <HomePresenter
      isLoaded={isLoaded}
      patients={patients}
      navigateToChatScreen={navigateToChatScreen}
      actLogout={actLogout}
      navigateToRecorderScreen={navigateToRecorderScreen}
    />
  );
}
