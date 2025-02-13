import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import Loader from "../../components/Common/Loader";

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

interface Props {
  isLoaded: boolean;
}

export default function RecorderPresenter({ isLoaded }: Props) {
  return isLoaded ? (
    <SafeContainer>
      <Text>{"Recorder"}</Text>
    </SafeContainer>
  ) : (
    <Loader />
  );
}
