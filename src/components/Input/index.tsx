import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

type Props = TextInputProps & {
  placeholder?: string;
};

export function Input({ placeholder, ...rest }: Props) {
  return <Container placeholder={placeholder} {...rest} />;
}
