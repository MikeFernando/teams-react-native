import React from "react";

type Props = {
  message: string;
};

import { Container, TextEmpyt } from "./styles";

export function ListEmpyt({ message }: Props) {
  return (
    <Container>
      <TextEmpyt>{message}</TextEmpyt>
    </Container>
  );
}
