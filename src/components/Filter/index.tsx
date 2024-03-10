import React from "react";

import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
};

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
