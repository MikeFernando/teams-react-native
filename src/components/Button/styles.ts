import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  justify-content: center;
  align-items: center;
  width: 100%;

  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme, type }) => type === 'PRIMARY'
    ? theme.COLORS.GREEN_700
    : theme.COLORS.RED_DARK
  };
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
` 
