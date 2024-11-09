<script lang="ts">
import type Itree from "@/stores/model";

export default {
  name: "RowItem",
  props: {
    treeFolders: Array<Itree>,
  },
  data() {
    return {
      expanded(treeFolder: Itree) {
        if (!!treeFolder.children) {
          treeFolder.show = !treeFolder.show
        }
      }
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
        <div class="item-wrap">
          <div class="row-wrap" @click="expanded(treeFolder)">
            <div class="nameWrap" >
              <fa icon="folder" v-if="treeFolder.name.includes('Dir')"></fa>
              <fa icon="file" v-if="treeFolder.name.includes('File')"></fa>
              {{ treeFolder.name }}
            </div>
            <div class="buttons">
              <fa class="button" icon="pen-to-square"/>
              <fa class="button" icon="xmark"></fa>
            </div>
          </div>
        </div>
      <RowItem :treeFolders="treeFolder.children" v-if="treeFolder.children && treeFolder.show"/>
      </li>
    </span>
  </ul>
</template>

//ограничиваем область видимости стиля класса list, c помощью :deep
//чтобы в рекурсии они выравнивались под единую правую границу
<style scoped>
.list {
  width: 100%;
  list-style: none;
}

:deep(.list) {
  box-sizing: border-box;
  width: 100%;
}

.row-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4rem;
  font-size: 1.4rem;
  transition: background-color .3s;
  cursor: pointer;
}
:deep(.item-wrap) {
  :hover {
    background-color: rgba(170, 161, 161, 0.4);
    color: #000000
  }
}
.buttons {
  display: flex;
  align-items: center;
}
.button{
  cursor: pointer;
  margin-right: 0.5rem;
}
</style>
