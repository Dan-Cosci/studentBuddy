import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as nb from './services/notebooks.service.js';
import * as n from './services/notes.service.js';

const useAppStore = create(
  persist(
    (set, get) => ({
      notes: [],
      notebooks: [],

      getAllUserNotes: async (id) => {
        const notes = await n.getData(id);
        set({ notes });
        console.log('notes:', notes);
      },

      getAllUserNotebooks: async (id) => {
        const notebooks = await nb.getData(id);
        set({ notebooks });
        console.log('notebooks:', notebooks);
      },

      initApp: async (id) => {
        if (!id) return;

        console.log('initApp HIT with id:', id);

        await Promise.all([
          get().getAllUserNotes(id),
          get().getAllUserNotebooks(id),
        ]);

        return 'note initialized';
      },
    }),
    {
      name: 'app-storage',
    }
  )
);

export default useAppStore;
