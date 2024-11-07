import { defineStore } from 'pinia'
import type Itree from "@/stores/model";

export const useTreeFoldersStore = defineStore( 'treeFolders',{
    state: ():Itree[]  => {
      return [
           {
             name: "Dir 1",
             children: [
               {
                 name: "Dir 1-1",
                 children: [
                   {name: "File 1-1-1"}
                 ]
               },
               {
                 name: "File 1-2",
               }
             ]
           },
           {
             name: "Dir 2",
             children: [
               {
                 name: "Dir 2-1",
               },
               {
                 name: "File 2-2"
               }
             ]
           },
           {
             name: "File 2"
           }
         ]
    },
  getters: {},
  actions: {


  }

})
