import { useEffect } from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";

import ChatPresenter from "./ChatPresenter";
import { AppDispatch, RootState } from "../../store/store";
import {
  resetChat,
  setInputText,
  setMessages,
} from "../../store/chat/chatReducer";
import { RootStackParamList } from "../../types/types";

type Props = StackScreenProps<RootStackParamList, "Chat">;

export default function ChatContainer({ navigation }: Props) {
  const { messages, inputText } = useSelector((state: RootState) => state.chat);

  const dispatch: AppDispatch = useDispatch();

  const actSetInputText = (text: string) => {
    dispatch(setInputText(text));
  };

  const pressBackBtn = () => {
    navigation.goBack();
  };

  const pressSendBtn = () => {
    dispatch(setInputText(""));
    Keyboard.dismiss();
  };

  useEffect(() => {
    dispatch(
      setMessages([
        {
          id: "1",
          text: "복강경 담낭절제술이 장기적인 소화 기능에 미치는 영향은?",
          type: "sent",
        },
        {
          id: "2",
          text: "대부분의 환자는 수술 후 소화 기능에 큰 문제가 없습니다...",
          type: "received",
        },
        {
          id: "3",
          text: "What are the most common complications?",
          type: "sent",
        },
        {
          id: "4",
          text: "The most common complications include bile duct injury...",
          type: "received",
        },
        { id: "5", text: "수술 후 회복 기간은 얼마나 걸리나요?", type: "sent" },
        {
          id: "6",
          text: "대부분의 환자는 수술 후 1-2주 내에 일상 생활로 복귀할 수 있습니다.",
          type: "received",
        },
        {
          id: "7",
          text: "Is there any dietary restriction after the surgery?",
          type: "sent",
        },
        {
          id: "8",
          text: "Patients are usually advised to avoid fatty foods for a few weeks...",
          type: "received",
        },
        { id: "9", text: "수술 후 통증 관리는 어떻게 하나요?", type: "sent" },
        {
          id: "10",
          text: "통증 관리는 일반적으로 처방된 진통제를 통해 이루어집니다.",
          type: "received",
        },
        {
          id: "11",
          text: "What is the success rate of this surgery?",
          type: "sent",
        },
        {
          id: "12",
          text: "수술 후 합병증은 얼마나 자주 발생하나요?",
          type: "sent",
        },
        {
          id: "13",
          text: "합병증은 드물지만 발생할 수 있습니다...",
          type: "received",
        },
        {
          id: "14",
          text: "수술 후 언제부터 운동을 시작할 수 있나요?",
          type: "sent",
        },
        {
          id: "15",
          text: "대부분의 환자는 수술 후 2-3주 내에 가벼운 운동을 시작할 수 있습니다.",
          type: "received",
        },
        {
          id: "16",
          text: "What kind of anesthesia is used during the surgery?",
          type: "sent",
        },
        {
          id: "17",
          text: "General anesthesia is typically used during this surgery.",
          type: "received",
        },
        {
          id: "18",
          text: "수술 후 흉터는 어떻게 관리해야 하나요?",
          type: "sent",
        },
        {
          id: "19",
          text: "흉터 관리는 보통 흉터 연고를 사용하여 이루어집니다.",
          type: "received",
        },
        {
          id: "20",
          text: "What is the recovery time for this surgery?",
          type: "sent",
        },
      ])
    );

    return () => {
      dispatch(resetChat());
    };
  }, []);

  return (
    <ChatPresenter
      isLoaded={true}
      messages={messages}
      inputText={inputText}
      pressBackBtn={pressBackBtn}
      actSetInputText={actSetInputText}
      pressSendBtn={pressSendBtn}
    />
  );
}
