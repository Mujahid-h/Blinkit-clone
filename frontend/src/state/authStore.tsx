import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthStore {
  user: Record<string, any> | null;
  currentOrder: Record<string, any> | null;
  setUser: (user: any) => void;
  setCurrentOrder: (order: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      currentOrder: null,
      setUser: (data) => set({ user: data }),
      setCurrentOrder: (order) => set({ currentOrder: order }),
      logout: () => set({ user: null, currentOrder: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
