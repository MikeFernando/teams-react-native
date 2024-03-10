import React from "react";

import { Container, Icon, PlayerName } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon icon="close" variant="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
