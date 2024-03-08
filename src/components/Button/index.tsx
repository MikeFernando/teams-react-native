import React from "react";

type Props = TouchableOpacityProps & {
  title: string;
  variant?: ButtonVariantStyleProps;
};
import { ButtonVariantStyleProps, Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

export function Button({ title, variant = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest} variant={variant}>
      <Title>{title}</Title>
    </Container>
  );
}
