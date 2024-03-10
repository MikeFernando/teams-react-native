import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconStyleProps = "PRIMARY" | "SECONDARY";

export const Container = styled(TouchableOpacity)`
  height: 56px;
  min-height: 56px;
  justify-content: center;
  margin-left: 12px;
`;

type Props = {
  variant: ButtonIconStyleProps;
};
export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, variant }) => ({
    size: 24,
    color: variant === "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED,
  })
)``;
