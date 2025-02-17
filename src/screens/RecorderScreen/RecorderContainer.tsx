import React, { useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { Audio } from "expo-av";

import { RootStackParamList } from "../../types/types";
import RecorderPresenter from "./RecorderPresenter";
import { RootState } from "../../store/store";

type Props = StackScreenProps<RootStackParamList, "Recorder">;

export default function RecorderContainer({ navigation }: Props) {
  const { isLoaded } = useSelector((state: RootState) => state.recorder);

  const [recording, setRecording] = useState<Audio.Recording | undefined>(
    undefined
  );

  const [recordingUri, setRecordingUri] = useState<string | null>(null);

  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const [exsound, setSound] = useState<Audio.Sound | undefined>(undefined);

  const [isPlaying, setIsPlaying] = useState(false);

  const goBack = () => navigation.goBack();

  async function startRecording() {
    try {
      if (permissionResponse?.status !== "granted") {
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      console.log("Recording started", recording);
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    if (recording) {
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });

      const uri = recording.getURI();
      console.log("Recording stopped and stored at", uri);
      setRecordingUri(uri);
      setRecording(undefined);
    } else {
      console.error("Recording is undefined");
    }
  }

  async function playSound(uri: string) {
    if (exsound) {
      await exsound.playAsync();
      setIsPlaying(true);
      return;
    }
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);
    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status) {
        if (status.isLoaded && !status.isPlaying && status.didJustFinish) {
          setIsPlaying(false);
          setSound(undefined);
        }
      }
    });
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (exsound) {
      await exsound.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function saveAudioFileToServer() {}

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <RecorderPresenter
      isLoaded={isLoaded}
      recording={recording}
      recordingUri={recordingUri}
      isPlaying={isPlaying}
      goBack={goBack}
      startRecording={startRecording}
      stopRecording={stopRecording}
      playSound={playSound}
      pauseSound={pauseSound}
      saveAudioFileToServer={saveAudioFileToServer}
    />
  );
}
