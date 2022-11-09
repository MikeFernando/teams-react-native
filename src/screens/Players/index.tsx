import { useState } from 'react';
import { FlatList } from 'react-native';

import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { PlayerCard } from '@components/PlayerCard';

import * as S from './styles'
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useRoute } from '@react-navigation/native';

type RoutParams = {
  group: string
}

export function Players(){
  const router = useRoute()

  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Mike Fernando', 'Jhon Doe'])

  const { group } = router.params as RoutParams

  return (
    <S.Container>
        <Header showBackButton />

        <Highlight 
          title={group}
          subtitle="Adicione a galera para separar os times"
        />

        <S.Form>
            <Input 
              placeholder="Nome da pessoa"
              autoCorrect={false}
            />

            <ButtonIcon
              icon="add"
              type="PRIMARY"
            />
        </S.Form>

        <S.HeaderList>
          <FlatList
              data={['time A', 'time B']}
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
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <PlayerCard 
                name={item}
                onRemove={() => {}}
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

        <Button title="Remover turma" type="SECONDARY" />
    </S.Container>
  );
}