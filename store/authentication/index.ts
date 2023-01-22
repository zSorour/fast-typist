import create from 'zustand';
import { persist } from 'zustand/middleware';
import AuthStore from 'store/authentication/types';

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      username: null,
      accessToken: null,
      isModalOpen: false,
      setAccessToken: (accessToken: string) => {
        set({ accessToken });
      },
      isLoggedIn: () => {
        return get().accessToken != null;
      },
      login: (username: string, accessToken: string) => {
        set({ username, accessToken });
        get().setIsModalOpen(false);
      },
      setIsModalOpen(value) {
        set({ isModalOpen: value });
      }
    }),
    {
      name: 'user',
      partialize: (state) => {
        return { accessToken: state.accessToken, username: state.username };
      }
    }
  )
);
