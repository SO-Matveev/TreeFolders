import { defineStore } from 'pinia'
import type Itree from "@/stores/model";

export const useTreeFoldersStore = defineStore( 'treeFolders',{
    state: ():Itree[]  => {
      return [
           {
             name: "Dir 1",
             show: false,
             children: [
               {
                 name: "Dir 1-1",
                 show: false,
                 children: [
                   {
                     name: "File 1-1-1",
                     show: false
                   }
                 ]
               },
               {
                 name: "File 1-2",
                 show: false,
               }
             ]
           },
           {
             name: "Dir 2",
             show: false,
             children: [
               {
                 name: "Dir 2-1",
                 show: false
               },
               {
                 name: "File 2-2",
                 show: false
               }
             ]
           },
           {
             name: "File 2",
             show: false
           }
         ]
    },
  getters: {},
  actions: {


  }

})
