import { Container, Subtitle, Title } from "./styles";

interface IProps {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: IProps){
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}