import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import HomePresenter from "./HomePresenter";
import { RootStackParamList } from "../../types/types";

type Props = StackScreenProps<RootStackParamList, "Home">;

export default function HomeContainer({}: Props) {
  return <HomePresenter isLoaded={true} />;
}
