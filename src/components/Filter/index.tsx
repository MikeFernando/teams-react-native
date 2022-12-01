import { TouchableOpacityProps } from 'react-native';

import * as S from './styles'
import * as T from './types'

type Props = TouchableOpacityProps & T.FilterStyleProps & {
  title: string
  isActive?: boolean
}

export function Filter({ title, isActive = false, ...rest }: Props){
  return (
    <S.Container
      isActive={isActive}
      {...rest}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}