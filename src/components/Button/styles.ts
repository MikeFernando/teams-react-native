import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonVariantStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  variant: ButtonVariantStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  height: 56px;
  max-height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
