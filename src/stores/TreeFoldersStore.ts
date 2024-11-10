import { defineStore } from 'pinia'
import type Itree from "@/stores/model";

export const useTreeFoldersStore = defineStore( 'treeFolders',{
    state: (): { data: Itree[] }  => ({
      data: [
           {
             name: "Dir 1",
             type: 'dir',
             show: false,
             children: [
               {
                 name: "Dir 1-1",
                 type: 'dir',
                 show: false,
                 children: [
                   {
                     name: "File 1-1-1",
                     type: 'file',
                     show: false
                   }
                 ]
               },
               {
                 name: "File 1-2",
                 type: 'file',
                 show: false,
               }
             ]
           },
           {
             name: "Dir 2",
             type: 'dir',
             show: false,
             children: [
               {
                 name: "Dir 2-1",
                 type: 'dir',
                 show: false
               },
               {
                 name: "File 2-2",
                 type: 'file',
                 show: false
               }
             ]
           },
           {
             name: "File 2",
             type: 'file',
             show: false
           }
         ]
    }),
  getters: {},
  actions: {
      deleteItemActions(treeFolder: Itree) {
        this.data = this.data.filter(item => item.name !== treeFolder.name)
      }
  }

})
