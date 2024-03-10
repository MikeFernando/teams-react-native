import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { TitleSubtitle } from "@components/TitleSubtitle.tsx";

import { Container, Content, Icon } from "./styles";

type Props = {};

export function NewGroup() {
  const [group, setGroup] = React.useState("");

  const navigation = useNavigation();
  const route = useRoute();

  function handleGoToPlayers() {
    navigation.navigate("players", { group });
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

        <Input placeholder="Nome do time" onChangeText={setGroup} />

        <Button
          style={{ marginTop: 20 }}
          title="Criar"
          onPress={handleGoToPlayers}
        />
      </Content>
    </Container>
  );
}
