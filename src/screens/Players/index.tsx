import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, FlatList, TextInput } from 'react-native';
import { useEffect, useRef, useState } from 'react';

import { AppError } from '@utils/AppError';

import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { PlayerStorageDTO } from '@storage/player/playerStorageDTO';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';

import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import * as S from './styles'
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

type RoutParams = {
  group: string
}

export function Players(){
  const router = useRoute()
  const navigation = useNavigation()

  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const { group } = router.params as RoutParams
  const newPlayerNameInputRef = useRef<TextInput>(null)

  const handleAddNewPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)

      newPlayerNameInputRef.current?.blur()

      fetchPlayersByTeam()
      setNewPlayerName('')

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
      }
    }
  }

  const fetchPlayersByTeam = async () => {
    try {
      const playerByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playerByTeam)

    }catch (error) {
      console.log(error)
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.')
    }
  }

  const handleRemovePlayers = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, group)
      await fetchPlayersByTeam()

    }catch (error) {
      Alert.alert('Remover pessoa', 'Não foi possível remvover essa pessoa.')
    }
  }

  const removeGroup = async () => {
    try {

      await groupRemoveByName(group)
      navigation.navigate('groups')

    } catch (error) {
      console.log(error)
      Alert.alert('Remover pessoa', ' Não foi possível remover grupo.')
    }
  }

  const handleGroupRemove = async () => {
    Alert.alert(
      'remover',
      'Deseja remover o grupo?',
      [
        { text: 'Não', style: 'cancel'},
        { text: 'Sim', onPress: () => removeGroup()}
      ]
    )
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team]) 

  return (
    <S.Container>
        <Header showBackButton />

        <Highlight 
          title={group}
          subtitle="Adicione a galera para separar os times"
        />

        <S.Form>
            <Input
              inputRef={newPlayerNameInputRef}
              placeholder="Nome da pessoa"
              autoCorrect={false}
              onChangeText={setNewPlayerName}
              value={newPlayerName}
              onSubmitEditing={handleAddNewPlayer}
              returnKeyType="done"
            />

            <ButtonIcon
              icon="add"
              type="PRIMARY"
              onPress={handleAddNewPlayer}
            />
        </S.Form>

        <S.HeaderList>
          <FlatList
              data={['QA', 'DEVS', 'DESIGN', 'LEADS']}
              keyExtractor={item => item}
              horizontal
              renderItem={({ item }) => (
                <Filter 
                  title={item} 
                  isActive={item === team}
                  onPress={() => setTeam(item)}
                />
              )}
          />
          <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
        </S.HeaderList>

        <FlatList 
            data={players}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <PlayerCard 
                name={item.name}
                onRemove={() => handleRemovePlayers(item.name)}
              />
            )}
            ListEmptyComponent={() => (
              <ListEmpty 
                message="Não há pessoas nesse time"
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 100 },
              players.length == 0 && { flex: 1 }
            ]}
        />

        <Button 
          title="Remover turma" 
          type="SECONDARY"
          onPress={handleGroupRemove}
        />
    </S.Container>
  );
}