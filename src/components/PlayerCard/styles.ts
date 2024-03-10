import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  width: 100%;
  align-items: center;
  border-radius: 8px;
  height: 56px;
  flex-direction: row;
  margin-bottom: 12px;
  padding: 0 12px;
`;

export const PlayerName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 24,
}))`
  margin-right: 8px;
`;
