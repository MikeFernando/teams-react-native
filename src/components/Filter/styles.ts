import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import * as T from './types'

export const Container = styled(TouchableOpacity)<T.FilterStyleProps>`
 ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `}

  margin-right: 12px;
  border-radius: 4px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme }) =>  css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}

  text-transform: uppercase;
`