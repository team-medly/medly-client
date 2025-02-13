import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import Loader from "../../components/Common/Loader";
import { PatientRecord } from "../../types/types";

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Header = styled.View`
  height: 60px;
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBtn = styled.TouchableOpacity``;

const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #7b6ef6;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  margin-horizontal: 20px;
  margin-bottom: 10px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  color: #aaa;
`;

const PatientItem = styled.View`
  margin-horizontal: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

const PatientItemUpperView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

const PatientName = styled.Text`
  font-size: 24px;
  font-weight: 500;
`;

const StatusButton = styled.TouchableOpacity`
  background-color: ${(props: { completed: string }) =>
    props.completed ? "#ddd" : "#7b6ef6"};
  padding: 8px 12px;
  border-radius: 5px;
`;

const StatusText = styled.Text`
  color: ${(props: { completed: string }) =>
    props.completed ? "#666" : "#fff"};
  font-size: 14px;
`;

const PatientItemBelowView = styled.View`
  margin-bottom: 15px;
`;

const PatientInfo = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;

const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
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

const renderPatientItem = ({ item }: { item: PatientRecord }) => (
  <PatientItem>
    <PatientItemUpperView>
      <PatientName>{item.name}</PatientName>
      <StatusButton completed={item.status} disabled={true}>
        <StatusText completed={item.status}>
          {item.status ? "설명 완료" : "설명 필요"}
        </StatusText>
      </StatusButton>
    </PatientItemUpperView>
    <PatientItemBelowView>
      <PatientInfo>{`ID: ${item.patientId}`}</PatientInfo>
      <PatientInfo>{`Birth Date: ${new Date(
        item.dateOfBirth
      ).toLocaleDateString("ko-KR")}`}</PatientInfo>
      <PatientInfo>{`Scheduled: ${new Date(item.scheduledAt).toLocaleDateString(
        "ko-KR"
      )}`}</PatientInfo>
    </PatientItemBelowView>
  </PatientItem>
);

interface Props {
  isLoaded: boolean;
  patients: PatientRecord[];
  navigateToChatScreen: () => void;
  actLogout: () => void;
}

export default function HomePresenter({
  isLoaded,
  patients,
  navigateToChatScreen,
  actLogout,
}: Props) {
  return isLoaded ? (
    <SafeContainer>
      <Header>
        <HeaderBtn onPress={actLogout}>
          <Title>Patients</Title>
        </HeaderBtn>
      </Header>
      <SearchContainer>
        <Ionicons name="search" size={20} color="#aaa" />
        <SearchInput placeholder="환자 검색" placeholderTextColor="#aaa" />
      </SearchContainer>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.patientId}
        renderItem={renderPatientItem}
      />
      <FloatingButton onPress={navigateToChatScreen}>
        <Ionicons name="chatbubble-ellipses" size={28} color="#fff" />
      </FloatingButton>
    </SafeContainer>
  ) : (
    <Loader />
  );
}
