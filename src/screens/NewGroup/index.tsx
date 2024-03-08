import React from "react";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TitleSubtitle } from "@components/TitleSubtitle.tsx";

import { Container, Content, Icon } from "./styles";

type Props = {};

export function NewGroup(props: Props) {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <TitleSubtitle
          title="Nova Turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome do time" />
        <Button style={{ marginTop: 20 }} title="Criar" />
      </Content>
    </Container>
  );
}
