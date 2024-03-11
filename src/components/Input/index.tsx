import React from "react";
import { Text, TextInput, TextInputProps } from "react-native";

import { Container } from "./styles";

type Props = TextInputProps & {
  placeholder?: string;
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ placeholder, inputRef, ...rest }: Props) {
  return <Container ref={inputRef} placeholder={placeholder} {...rest} />;
}
