import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
  autoCorrect: false,
  autoCompleteType: "off",
  autoCapitalize: "none",
}))`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
  height: 56px;
  max-height: 56px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
