import { createStore } from 'zustand'

const useAuthStore = createStore((set) => ({

  isAuth: false,
  user: null, setUser: (user) => set({ user }),
  loading: false, setloading: (loading) => set({ loading }),
  error: null, setError: (error) => set({ error }),
 
  login: (user) => set({ isAuth: true, user }),
  register: (user) => set({ isAuth: true, user }),
  logout: () => set({ isLoggedIn: false, user: null }),

}));

export default useAuthStore;