// AuthStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as s from './services/auth.service.js';

const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuth: false,
      loading: false,
      error: null,
      user:null,

      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),

      login: async ({ email, password }) => {
        set({ loading: true, error: null });
        try {
          const response = await s.login({ email, password });
          if (!response.data.success) {
            set({ error: response.data.message, isAuth: false, loading: false });
            return;
          }
          set({ isAuth: true, loading: false, user: response.data.user });
        } catch (err) {
          set({ error: err.message || 'Login failed', loading: false });
        }
      },

      register: async ({ username, email, password }) => {
        set({ loading: true, error: null });
        try {
          const response = await s.register({ username, email, password });
          if (response.status !== 201) {
            set({ error: response.data.message, isAuth: false, loading: false });
            return;
          }
          set({ isAuth: true, loading: false });
        } catch (err) {
          set({ error: err.message || 'Registration failed', loading: false });
        }
      },

      logout: () => {
        set({ isAuth: false, loading: false, error: null, user:null});
        s.logout();
      },

      // Optional: verify with backend
      checkAuth: async () => {
        set({ loading: true, error: null });
        try {
          const response = await s.checkAuth();
          if (response.status === 200) {
            set({ isAuth: true, loading: false, user: response.data.user });
          } else {
            set({ isAuth: false, loading: false });
          }
        } catch (err) {
          console.log(err);
          set({ isAuth: false, loading: false });
        }
      },
    }),
    {
      name: 'auth-storage', // key in localStorage
      getStorage: () => localStorage, // use localStorage
    }
  )
);

export default useAuthStore;
