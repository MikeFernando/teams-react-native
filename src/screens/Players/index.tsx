import React from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { playersAddByGroup } from "@storage/players/playersAddByGroup";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { playersGetByGroupAndTeam } from "@storage/players/playersGetByGroupAndTeam";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { ListEmpyt } from "@components/ListEmpyt";
import { PlayerCard } from "@components/PlayerCard";
import { ButtonIcon } from "@components/ButtonIcon";
import { TitleSubtitle } from "@components/TitleSubtitle.tsx";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

type RouteParams = {
  group: string;
};

export function Players() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [newPlayerName, setNewPlayerName] = React.useState("");
  const [team, setTeam] = React.useState("Time A");
  const [players, setPlayers] = React.useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = React.useRef<TextInput>(null);

  const navigation = useNavigation();

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddNewPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Nova Pessoa", "Informe o nome da pessoa.");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playersAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      fetchPlayersByTeam();
      setNewPlayerName("");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      } else {
        Alert.alert("Nova Pessoa", "Não foi possível adicionar");
        console.log(error);
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true);
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert(
        "Pessoa",
        "Não foi possível carregar as pessoas do time selecionado"
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      await fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover Pessoa", "Não foi possível remover essa pessoa");
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      Alert.alert("Remover Turma", "Não foi possível remover essa turma");
      console.log(error);
    }
  }

  function handleRemoveGroup() {
    Alert.alert("Remover", "Deseja remover essa turma?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => groupRemove() },
    ]);
  }

  React.useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <TitleSubtitle
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          returnKeyType="done"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddNewPlayer}
        />
        <ButtonIcon icon="add" variant="PRIMARY" onPress={handleAddNewPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B", "Time C"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
            />
          )}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpyt message="Não há jogadores neste time" />
          )}
        />
      )}

      <Button
        title="Remover turma"
        variant="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </Container>
  );
}
