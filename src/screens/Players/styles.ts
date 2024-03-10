import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;
