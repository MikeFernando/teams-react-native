import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const List = styled.FlatList`
  width: 100%;
`