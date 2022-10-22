import { BackButton, BackIcon, Container, Logo } from "./styles";

import LogoImg from '@assets/logo.png'

interface IProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: IProps){
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Container>
  );
}