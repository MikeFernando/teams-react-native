import { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { groupGetAll } from "@storage/group/groupGetAll";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import * as S from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  const handleCreateNewGroup = () => {

    navigation.navigate('new')
  }

  const fetchGroups = async () => {

    try {
      const data = await groupGetAll()
      setGroups(data)

    } catch (error) {
      throw error
    }
  }
  
  const handleOpenGroup = (group: string) => {
    
    navigation.navigate('players', { group })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

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
            onPress={() => handleOpenGroup(item)}
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