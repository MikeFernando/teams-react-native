import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};
import { Container, Icon, Title } from "./styles";

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
