import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import Loader from "../../components/Common/Loader";

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  isLoaded: boolean;
}

export default function HomePresenter({ isLoaded }: Props) {
  return isLoaded ? (
    <SafeContainer>
      <Text>{"Home"}</Text>
    </SafeContainer>
  ) : (
    <Loader />
  );
}
