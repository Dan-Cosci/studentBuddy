import {create, persist} from 'zustand';


const useAppStore = create(persist((set)=>({
  notes: [],
  notebooks: [],

  getNotebooks: async () => {}
  
},{
  name: 'app-storage'
})));

export default useAppStore;
