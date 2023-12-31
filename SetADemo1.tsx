import * as React from "react";
import { Button, TextInput, View } from "react-native";
import {
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctHorzContainer,
  SubtitleText,
} from "./Shared";
import styles from "./styles";
import { useState } from "react";

export default function SetADemo1() {
  const [name, setName] = useState("Barney");

  const changeNameTo = name == "Barney" ? "Suzie" : "Barney";

  const handleChangeName = () => {
    console.log(`handleChangeName(${changeNameTo})`);
    setName(changeNameTo);
  };

  const handleBarney = () => {
    console.log(`setName(Barney)`);
    setName("Barney");
  };
  return (
    <LctAvoidingView style={styles.container}>
      <SubtitleText>Inline</SubtitleText>
      <FlexFill />
      <LabelText>Name: {name}</LabelText>
      <LctHorzContainer>
        <LabelText>Set name to:</LabelText>
        <Button title={changeNameTo} onPress={handleChangeName} />
        <Button title="Barney" onPress={handleBarney} />
      </LctHorzContainer>
      <LctHorzContainer>
        <TextInput style={styles.input} />
      </LctHorzContainer>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
