import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "PRIMARY" | "SECONDARY";
};

export function ButtonIcon({ icon, variant = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} variant={variant} />
    </Container>
  );
}
