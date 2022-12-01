import { useNavigation } from '@react-navigation/native'

import LogoImg from '@assets/pxt.jpg'

import * as S from "./styles";

interface IProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: IProps){
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={LogoImg} />
    </S.Container>
  );
}