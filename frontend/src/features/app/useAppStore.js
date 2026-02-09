import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as nb from './services/notebooks.service.js';
import * as n from './services/notes.service.js';

const useAppStore = create(
  persist(
    (set, get) => ({
      notes: [],
      notebooks: [],

      // notes
      getAllUserNotes: async (id) => {
        const notes = await n.getData(id);
        set({ notes: notes.data.notes});
      },
      addNote: async (id, data) => {
        const newNote = await n.addNote(id, data);
        set((state) => ({ notes: [...state.notes, newNote] }));
      },

      deleteNote: async (id) => {
        await n.deleteNote(id);
        set((state) => ({ notes: state.notes.filter((note) => note.id !== id) }));
      },

      updateNote: async (id, data) => {
        await n.updateNote(id, data);
        set((state) => ({ notes: state.notes.map((note) => note.id === id ? data : note) }));
      },


    
       // notebooks
      getAllUserNotebooks: async (id) => {
        const notebooks = await nb.getData(id);
        set({ notebooks: notebooks.data.notebooks });
      },
      addNotebook: async (id, data) => {
        const newNotebook = await nb.addNotebook(id, data);
        set((state) => ({ notebooks: [...state.notebooks, newNotebook] }));
      },
      deleteNotebook: async (id) => {
        await nb.deleteNotebook(id);
        set((state) => ({ notebooks: state.notebooks.filter((nb) => nb.id !== id) }));
      },
      update: async (id, data) => {
        await nb.updateNotebook(id, data);
        set((state) => ({ notebooks: state.notebooks.map((nb) => nb.id === id ? data : nb) }));
      },

      


      initApp: async (id) => {
        if (!id) return;

        console.log('initApp HIT with id:', id);

        await Promise.all([
          get().getAllUserNotes(id),
          get().getAllUserNotebooks(id),
        ]);

        console.log(get().notes);
        console.log(get().notebooks);

        return 'note initialized';
      },
    }),
    {
      name: 'app-storage',
    }
  )
);

export default useAppStore;
