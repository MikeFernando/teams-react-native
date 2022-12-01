import { SafeAreaView } from 'react-native-safe-area-context'
import { UsersThree } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`
export const Content = styled.View`
 flex: 1;
 justify-content: center;
 align-items: center;

`

export const Input = styled.TextInput`
  width: 100%;
  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  border-radius: 6px;
  padding: 16px;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.PURPLE
}))`
  align-self: center;
`
