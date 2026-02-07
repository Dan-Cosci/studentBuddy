import {create, persist} from 'zustand';
import * as nb from './services/notebooks.service.js';
import * as n from './services/notes.service.js';



const useAppStore = create(persist((set)=>({
  notes: [],
  notebooks: [],
  getAllUserNotes: async (id) => {
    const notebook = nb.getData(id);
    set({notebooks: notebook});
    console.log(notebook);
  },
  getAllUserNotebooks: async (id) => {
    const note = n.getData(id);
    set({notes: note});
    console.log(note);
  }
  
},{
  name: 'app-storage'
})));

export default useAppStore;
