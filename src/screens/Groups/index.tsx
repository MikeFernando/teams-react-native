import { useState } from "react";
import { useNavigation } from '@react-navigation/native'

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import * as S from "./styles";

export function Groups() {
  const [ groups, setGroups ] = useState<string[]>([])

  const navigation = useNavigation()

  function handleCreateNewGroup() {
    navigation.navigate('new')
  }

  return (
    <S.Container >
      <Header />
      <Highlight 
        title="Teams" 
        subtitle="Bem vindo ao time!" 
      />

      <S.List
        data={groups}
        keyExtractor={(item: any) => item}
        renderItem={({ item }: any) => (
          <GroupCard
            title={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Que tal cadastrar a primeira turma?"
          />
        )}
      />

      <Button 
        title='Criar nova turma'
        style={{ marginBottom: 10 }}
        onPress={handleCreateNewGroup}
      />
    </S.Container>
  );
}