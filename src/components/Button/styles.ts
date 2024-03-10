import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { css } from "styled-components";

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
    variant === "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  text-align: center;
`;
