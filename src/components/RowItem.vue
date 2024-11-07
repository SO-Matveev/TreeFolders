<script lang="ts">
import type Itree from "@/stores/model";

export default {
  name: "RowItem",
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

  <ul>
    <div class="container">
      <li
        class="item"
        v-for="treeFolder in treeFolders"
        :key="treeFolder.name"
      >
        <span @click="parent = !parent">{{ treeFolder.name }} </span>
        <RowItem :treeFolders="treeFolder.children" v-if="treeFolder.children"/>
      </li>
    </div>
  </ul>

  <!--      <ul-->
  <!--        class="row"-->
  <!--        v-for="treeFolder in treeFolders"-->
  <!--        :key="treeFolder.name"-->
  <!--      >-->
  <!--          <div>-->
  <!--            <fa icon="folder" v-if="treeFolder.name.includes('Dir')"></fa>-->
  <!--            <fa icon="file" v-if="treeFolder.name.includes('File')"></fa>-->
  <!--            <span @click="parent = !parent">{{ treeFolder.name }} </span>-->
  <!--            <fa icon="pen-to-square"/>-->
  <!--            <fa icon="xmark"></fa>-->
  <!--          </div>-->

  <!--        <li class="row" @click="child = !child" v-for="folder in treeFolder.children">-->
  <!--          <div v-if="!!parent">-->
  <!--            <fa icon="folder" v-if="folder.name.includes('Dir')"></fa>-->
  <!--            <fa icon="file" v-if="folder.name.includes('File')"></fa>-->
  <!--            <span>{{ folder.name }}</span>-->
  <!--            <fa icon="pen-to-square"/>-->
  <!--            <fa icon="xmark"></fa>-->
  <!--          </div>-->

  <!--          <li class="row" v-for="file in folder.children">-->
  <!--            <div v-if="!!parent && child">-->
  <!--              <fa icon="folder" v-if="file.name.includes('Dir')"></fa>-->
  <!--              <fa icon="file" v-if="file.name.includes('File')"></fa>-->
  <!--              <span >{{ file.name }}</span>-->
  <!--              <fa icon="pen-to-square"/>-->
  <!--              <fa icon="xmark"></fa>-->
  <!--            </div>-->
  <!--          </li>-->
  <!--        </li>-->
  <!--      </ul>-->

</template>

<style scoped>
.row {
  margin-left: 3rem;
  list-style: none;
  padding-left: 0.5rem;
  padding-right: 1rem;

  :hover {
    background-color: rgba(170, 161, 161, 0.4);
    color: #000000
  }
}
</style>
