import React, { useCallback } from "react";
import { Alert, TextInput } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import { groupCreate } from "@storage/group/groupCreate";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { TitleSubtitle } from "@components/TitleSubtitle.tsx";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = React.useState("");

  const navigation = useNavigation();

  async function handleNew() {
    if (group.trim().length === 0) {
      return Alert.alert("Nova Turma", "Informe o nome da turma.");
    }

    try {
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Turma", error.message);
      } else {
        Alert.alert("Nova Turma", "Não foi possível criar uma nova turma.");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <TitleSubtitle
          title="Nova Turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          autoCorrect={false}
          returnKeyType="done"
          placeholder="Nome do time"
          onChangeText={setGroup}
        />

        <Button style={{ marginTop: 20 }} title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
