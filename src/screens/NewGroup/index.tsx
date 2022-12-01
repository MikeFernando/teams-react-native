import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useState } from 'react';

import { AppError } from "@utils/AppError";
import { createGroup } from '@storage/group/groupCreate';

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import * as S from "./styles";

export function NewGroup(){
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  const handleNewGroup = async () => {

    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome do grupo')
      }
      
      await createGroup(group)
      navigation.navigate('players', { group })

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo')
        console.log(error)
      }
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <S.Input
          onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          style={{ marginTop: 15 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Container>
  );
}