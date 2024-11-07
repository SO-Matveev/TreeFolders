<script lang="ts">
import type Itree from "@/stores/model";

export default {
  name: "RowItem",
  props: {
    treeFolders: Array<Itree>,
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <ul class="list">
    <span>
      <li
        class="item"
        v-for="treeFolder in treeFolders"
        :key="treeFolder.name"
      >
        <div class="hover">
          <div class="item-wrap">
            <div class="nameWrap">
              <fa icon="folder" v-if="treeFolder.name.includes('Dir')"></fa>
              <fa icon="file" v-if="treeFolder.name.includes('File')"></fa>
              {{ treeFolder.name }}
            </div>
            <div class="buttons">
              <fa icon="pen-to-square"/>
              <fa icon="xmark"></fa>
            </div>
          </div>
        </div>
        <RowItem :treeFolders="treeFolder.children" v-if="treeFolder.children"/>
      </li>
    </span>
  </ul>

</template>

//ограничиваем область видимости стиля класса list, c помощью :deep
//чтобы в рекурсии они выравнивались под единую правую границу
<style scoped>
.list {
  width: 100%;
}
:deep(.list) {
  box-sizing: border-box;
  width: 100%;


}
.item-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4rem;
  font-size: 1.4rem;
  transition: background-color .3s;
  cursor: pointer;

}
.hover {
  :hover {
    background-color: rgba(170, 161, 161, 0.4);
    color: #000000
  }
}
</style>
