import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  token: string;
}

interface Actions {
  setToken: (token: string) => void;
  clearToken: () => void;
}

type TokenStore = State & Actions;

export const useTokenStore = create<TokenStore>()(
  persist(
    (set) => ({
      token: '',
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: '' }),
    }),
    {
      name: 'a-t',
    },
  ),
);
