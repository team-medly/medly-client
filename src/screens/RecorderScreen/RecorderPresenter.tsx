import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import Loader from "../../components/Common/Loader";

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
const BackButton = styled.TouchableOpacity``;

const Header = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

const TitleContainer = styled.View`
  padding-left: 20px;
`;

const ScheduledDate = styled.Text`
  font-size: 14px;
  color: #666;
  margin-vertical: 10px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Status = styled.View`
  align-self: flex-start;
  background-color: #7b6ef6;
  padding: 6px 12px;
  border-radius: 5px;
  margin-top: 10px;
`;

const StatusText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #ddd;
  margin-vertical: 15px;
  margin-horizontal: 20px;
`;

const SummaryContainer = styled.View`
  padding-horizontal: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
`;

const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
  width: 60px;
  height: 60px;
  background-color: #7b6ef6;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  shadow-color: rgba(0, 0, 0, 0.4);
  shadow-offset: 0px 6px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 10;
`;
interface Props {
  isLoaded: boolean;
  goBack: () => void;
}

export default function RecordingConsentScreen({ isLoaded, goBack }: Props) {
  return isLoaded ? (
    <SafeContainer>
      <Header>
        <BackButton onPress={goBack}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </BackButton>
      </Header>
      <ScrollView>
        <TitleContainer>
          <ScheduledDate>Scheduled: 2024-01-22</ScheduledDate>
          <Title>인공관절치환술 동의서</Title>
          <Status>
            <StatusText>설명 필요</StatusText>
          </Status>
        </TitleContainer>
        <Divider />
        <SummaryContainer>
          <SectionTitle>Summary</SectionTitle>
          <Description>아직 설명이 녹음되지 않았습니다.</Description>
          <SectionTitle>Detail</SectionTitle>
          <Description>아직 설명이 녹음되지 않았습니다.</Description>
        </SummaryContainer>
      </ScrollView>
      <FloatingButton>
        <Ionicons name="mic" size={28} color="#fff" />
      </FloatingButton>
    </SafeContainer>
  ) : (
    <Loader />
  );
}
