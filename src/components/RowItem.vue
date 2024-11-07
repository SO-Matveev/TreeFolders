<script lang="ts">
  import type Itree from "@/stores/model";

  export default {
    props: {
      treeFolders: Array<Itree>,
      depth: {
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        parent: false,
        child: false,

      }
    }
  }
</script>

<template>
      <ul
        class="folder"
        v-for="treeFolder in treeFolders"
        :key="treeFolder.name"
      >
        <span @click="parent = !parent">{{ treeFolder.name }} </span>
        <li class="file" @click="child = !child" v-for="folder in treeFolder.children">
          <span v-if="!!parent"  >{{ folder.name }}</span>
          <li class="file" v-for="file in folder.children">
            <span v-if="!!parent && child">{{ file.name }}</span>
          </li>
        </li>
      </ul>
</template>

<style scoped>
.folder{
  :hover {
    background-color: rgba(170, 161, 161, 0.4);
    color: #000000
  }
}
      .file {
        margin-left: 3rem;
        list-style: none;
        :hover {
          background-color: rgba(170, 161, 161, 0.4);
          color: #000000
        }
      }
</style>
