// import { MMKV } from "react-native-mmkv";

// export const tokenStorage = new MMKV({
//   id: "token-storage",
//   encryptionKey: "some_secret_key",
// });

// export const storage = new MMKV({
//   id: "my-app-storage",
//   encryptionKey: "some_secret_key",
// });

// export const mmkvStorage = {
//   setItem: (key: string, value: string) => {
//     storage.set(key, value);
//   },
//   getItem: (key: string) => {
//     const value = storage.getString(key);
//     return value ?? null;
//   },
//   removeItem: (key: string) => {
//     storage.delete(key);
//   },
// };

import AsyncStorage from "@react-native-async-storage/async-storage";

export const tokenStorage = {
  setItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value)); // Serialize value to string
    } catch (error) {
      console.error("Error saving data to AsyncStorage", error);
    }
  },

  getItem: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null; // Deserialize value
    } catch (error) {
      console.error("Error reading data from AsyncStorage", error);
      return null;
    }
  },

  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data from AsyncStorage", error);
    }
  },
};
