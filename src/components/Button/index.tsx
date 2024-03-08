import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonVariantStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  variant?: ButtonVariantStyleProps;
};

export function Button({ title, variant = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest} variant={variant}>
      <Title>{title}</Title>
    </Container>
  );
}
