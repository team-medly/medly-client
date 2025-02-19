import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import Loader from "../../components/Common/Loader";

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
const BackButton = styled.TouchableOpacity``;

const SaveButton = styled.TouchableOpacity``;

const Header = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
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

const FloatingButton = styled.TouchableOpacity<{ isSaving: boolean }>`
  position: absolute;
  bottom: 20px;
  align-self: center;
  width: 60px;
  height: 60px;
  background-color: ${({ isSaving }: { isSaving: boolean }) =>
    isSaving ? "#ccc" : "#7b6ef6"};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  shadow-color: rgba(0, 0, 0, 0.4);
  shadow-offset: 0px 6px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 10;
  opacity: ${({ isSaving }: { isSaving: boolean }) => (isSaving ? 0.6 : 1)};
`;
interface Props {
  isLoaded: boolean;
  recording: any;
  recordingUri: any;
  isPlaying: boolean;
  isSaving: boolean;
  goBack: () => void;
  startRecording: () => void;
  stopRecording: () => void;
  playSound: (uri: string) => void;
  pauseSound: () => void;
  saveAudioFileToServer: () => void;
}

export default function RecordingConsentScreen({
  isLoaded,
  recording,
  recordingUri,
  isPlaying,
  isSaving,
  goBack,
  startRecording,
  stopRecording,
  playSound,
  pauseSound,
  saveAudioFileToServer,
}: Props) {
  return isLoaded ? (
    <SafeContainer>
      <Header>
        <BackButton onPress={goBack}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </BackButton>
        {recordingUri && !isSaving && (
          <SaveButton onPress={saveAudioFileToServer} disabled={isSaving}>
            <Ionicons name="save" size={24} color="#000" />
          </SaveButton>
        )}
        {isSaving && (
          <SaveButton onPress={saveAudioFileToServer} disabled={isSaving}>
            <ActivityIndicator size="small" color="#000" />
          </SaveButton>
        )}
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
          <Description>
            {isSaving
              ? "내용을 요약 중 입니다."
              : "아직 설명이 녹음되지 않았습니다."}
          </Description>
          <SectionTitle>Detail</SectionTitle>
          <Description>
            {isSaving
              ? "내용을 요약 중 입니다."
              : "아직 설명이 녹음되지 않았습니다."}
          </Description>
        </SummaryContainer>
      </ScrollView>

      {!recordingUri && (
        <FloatingButton
          onPress={recording ? stopRecording : startRecording}
          disabled={isSaving}
          isSaving={isSaving}
        >
          <Ionicons name={recording ? "stop" : "mic"} size={28} color="#fff" />
        </FloatingButton>
      )}

      {recordingUri && (
        <FloatingButton
          onPress={isPlaying ? pauseSound : () => playSound(recordingUri)}
          disabled={isSaving}
          isSaving={isSaving}
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={28}
            color="#fff"
          />
        </FloatingButton>
      )}
    </SafeContainer>
  ) : (
    <Loader />
  );
}
