import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import Loader from "../../components/Common/Loader";

const patients = [
  {
    id: "00001",
    name: "안의진",
    status: "설명 필요",
    birthDate: "1990-01-01",
    scheduledDate: "2023-10-01",
  },
  {
    id: "00002",
    name: "정지현",
    status: "설명 필요",
    birthDate: "1985-02-15",
    scheduledDate: "2023-10-02",
  },
  {
    id: "00003",
    name: "김재빈",
    status: "설명 완료",
    birthDate: "1992-03-20",
    scheduledDate: "2023-10-03",
  },
  {
    id: "00004",
    name: "선우진성",
    status: "설명 완료",
    birthDate: "1988-04-25",
    scheduledDate: "2023-10-04",
  },
  {
    id: "00005",
    name: "현수민",
    status: "설명 필요",
    birthDate: "1995-05-30",
    scheduledDate: "2023-10-05",
  },
  {
    id: "00006",
    name: "박지훈",
    status: "설명 필요",
    birthDate: "1991-06-10",
    scheduledDate: "2023-10-06",
  },
  {
    id: "00007",
    name: "이서준",
    status: "설명 완료",
    birthDate: "1987-07-15",
    scheduledDate: "2023-10-07",
  },
  {
    id: "00008",
    name: "최민준",
    status: "설명 필요",
    birthDate: "1993-08-20",
    scheduledDate: "2023-10-08",
  },
  {
    id: "00009",
    name: "김하늘",
    status: "설명 완료",
    birthDate: "1989-09-25",
    scheduledDate: "2023-10-09",
  },
  {
    id: "00010",
    name: "오지호",
    status: "설명 필요",
    birthDate: "1994-10-30",
    scheduledDate: "2023-10-10",
  },
  {
    id: "00011",
    name: "장민서",
    status: "설명 완료",
    birthDate: "1990-11-05",
    scheduledDate: "2023-10-11",
  },
  {
    id: "00012",
    name: "윤지우",
    status: "설명 필요",
    birthDate: "1986-12-10",
    scheduledDate: "2023-10-12",
  },
  {
    id: "00013",
    name: "서윤아",
    status: "설명 완료",
    birthDate: "1992-01-15",
    scheduledDate: "2023-10-13",
  },
  {
    id: "00014",
    name: "한지민",
    status: "설명 필요",
    birthDate: "1988-02-20",
    scheduledDate: "2023-10-14",
  },
  {
    id: "00015",
    name: "이도현",
    status: "설명 완료",
    birthDate: "1995-03-25",
    scheduledDate: "2023-10-15",
  },
];

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

const renderPatientItem = ({
  item,
}: {
  item: {
    id: string;
    name: string;
    status: string;
    birthDate: string;
    scheduledDate: string;
  };
}) => (
  <PatientItem>
    <PatientItemUpperView>
      <PatientName>{item.name}</PatientName>
      <StatusButton completed={item.status === "설명 완료"} disabled={true}>
        <StatusText completed={item.status === "설명 완료"}>
          {item.status}
        </StatusText>
      </StatusButton>
    </PatientItemUpperView>
    <PatientItemBelowView>
      <PatientInfo>{`ID: ${item.id}`}</PatientInfo>
      <PatientInfo>{`Birth Date: ${item.birthDate}`}</PatientInfo>
      <PatientInfo>{`Scheduled: ${item.scheduledDate}`}</PatientInfo>
    </PatientItemBelowView>
  </PatientItem>
);

interface Props {
  isLoaded: boolean;
  navigateToChatScreen: () => void;
}

export default function HomePresenter({
  isLoaded,
  navigateToChatScreen,
}: Props) {
  return isLoaded ? (
    <SafeContainer>
      <Header>
        <Title>Patients</Title>
      </Header>
      <SearchContainer>
        <Ionicons name="search" size={20} color="#aaa" />
        <SearchInput placeholder="환자 검색" placeholderTextColor="#aaa" />
      </SearchContainer>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
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
