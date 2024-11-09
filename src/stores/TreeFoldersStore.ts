import { defineStore } from 'pinia'
import type Itree from "@/stores/model";

export const useTreeFoldersStore = defineStore( 'treeFolders',{
    state: ():Itree[]  => {
      return [
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
    },
  getters: {},
  actions: {


  }

})
