import React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

import { GREY_COLOR } from "../../constants/Colors";

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.mainBg};
`;

const LoaderText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: ${GREY_COLOR};
`;

export default function Loader() {
  const { t } = useTranslation();

  return (
    <SafeContainer>
      <ActivityIndicator color={GREY_COLOR} />
      <LoaderText>{t("components.loader.text.loaderText")}</LoaderText>
    </SafeContainer>
  );
}
