import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Message } from "../../types/types";
import Loader from "../../components/Common/Loader";

const Header = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const IconButton = styled.TouchableOpacity`
  padding: 16px;
`;

const MessageBubble = styled.View<{ type: string }>`
  background-color: ${(props: { type: string }) =>
    props.type === "sent" ? "#1E1E1E" : "#EAEAEA"};
  padding: 12px 16px;
  border-radius: 16px;
  margin-vertical: 6px;
  align-self: ${(props: { type: string }) =>
    props.type === "sent" ? "flex-end" : "flex-start"};
  max-width: 75%;
`;

const MessageText = styled.Text<{ type: string }>`
  color: ${(props: { type: string }) =>
    props.type === "sent" ? "#fff" : "#333"};
  font-size: 16px;
`;

const InputContainer = styled.View`
  min-height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #ddd;
`;

const MessageInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;

const SendButton = styled.TouchableOpacity`
  background-color: #7b6ef6;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

interface Props {
  isLoaded: boolean;
  messages: Message[];
  inputText: string;
  flatListRef: React.RefObject<FlatList>;
  modelName: string;
  pressBackBtn: () => void;
  actSetInputText: (text: string) => void;
  pressSendBtn: () => void;
}

const ChatScreen = ({
  isLoaded,
  messages,
  inputText,
  flatListRef,
  modelName,
  pressBackBtn,
  actSetInputText,
  pressSendBtn,
}: Props) => {
  return isLoaded ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Header>
          <IconButton onPress={pressBackBtn}>
            <Ionicons name="close" size={24} color="black" />
          </IconButton>
          <Title>{modelName}</Title>
          <IconButton disabled={true}>
            <Ionicons name="share-social-outline" size={24} color="black" />
          </IconButton>
        </Header>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => `${item.type}_${item.idx}`}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          renderItem={({ item }) => (
            <MessageBubble type={item.type}>
              <MessageText type={item.type}>{item.text}</MessageText>
            </MessageBubble>
          )}
        />
        <InputContainer>
          <MessageInput
            placeholder="Write your message"
            placeholderTextColor="#aaa"
            multiline
            value={inputText}
            onChangeText={actSetInputText}
          />
          <SendButton onPress={pressSendBtn} disabled={inputText === ""}>
            <Ionicons name="send" size={20} color="#fff" />
          </SendButton>
        </InputContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  ) : (
    <Loader />
  );
};

export default ChatScreen;
