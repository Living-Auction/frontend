import { create } from 'zustand';

interface State {
  token: string;
}

interface Actions {
  setToken: (token: string) => void;
}

type TokenStore = State & Actions;

export const useTokenStore = create<TokenStore>((set) => ({
  token: '',
  setToken: (token: string) => set({ token }),
}));
