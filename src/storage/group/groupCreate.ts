import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupGetAll } from "./groupGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupGetAll();

    const groupAlreadyExists = storageGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com este nome.");
    }

    const storage = JSON.stringify([...storageGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
