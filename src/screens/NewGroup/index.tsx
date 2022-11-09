import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import * as S from "./styles";

export function NewGroup(){
  const navigation = useNavigation()

  const [group, setGroup] = useState('')

  function handleNewGroup() {
    navigation.navigate('players', { group })
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

        <Input 
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