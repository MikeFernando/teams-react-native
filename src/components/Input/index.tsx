import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

export function Input({...rest}: TextInputProps){
  const { COLORS } = useTheme()

  return (
    <Container
      placeholder="Nome da turma"
      placeholderTextColor={COLORS.GRAY_300}
      {...rest} 
    />
  );
}