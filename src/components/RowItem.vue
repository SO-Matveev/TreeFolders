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
            <div class="nameWrap">
              <fa icon="folder" v-if="treeFolder.type.includes('dir') && !treeFolder.show "/>
              <fa icon="folder-open" v-if="treeFolder.type.includes('dir') && !!treeFolder.show"/>
              <fa icon="file" v-if="treeFolder.type.includes('file')"></fa>
              {{ treeFolder.name }}
            </div>
            <div class="buttons">
              <fa class="button" icon="pen-to-square" @click="renameItem(treeFolder)"/>
              <fa class="button" icon="xmark" @click="onDeleteItem(treeFolder)"/>
            </div>
          </div>
        </div>
<!--        Если передать в наследника рекурсии емит на клик-->
<!--        @click="$emit('deleteItem', treeFolder.children)-->
<!--        То клик на удаление срабатывает на всю строку в целом, а не на иконку-->
      <RowItem :treeFolders="treeFolder.children"
               v-if="treeFolder.children && treeFolder.show"
      />
      </li>
    </span>
  </ul>
</template>

<script lang="ts">
import type Itree from "@/stores/model";

export default {
  name: "RowItem",
  props: {
    treeFolders: Array<Itree>,
  },
  methods: {
    onDeleteItem(treeFolder: Itree) {
      // Эмит срабатывает на первом экземпляре: Dir1, Dir2, File2
      // Но при попытке удаления в консоль лог приходит экземпляр, но эмит на подъем события не срабатывает.
      this.$emit("deleteItem", treeFolder)
    },
    renameItem(treeFolder: Itree) {
      const message: string = `Как вы хотите переименовать ${treeFolder.name}`
      const newName: string | null = prompt(
        message, treeFolder.name
      )
      if (newName === null) return

      if (newName === "") {
        const typeRename: string = treeFolder.type.includes('dir') ? 'папки' : 'файла'
        alert(`Введите имя ${typeRename}`)
        this.renameItem(treeFolder);
        return
      }
      treeFolder.name = newName
      treeFolder.show = !treeFolder.show

    },
    expanded(treeFolder: Itree) {
      if (!!treeFolder.children) {
        treeFolder.show = !treeFolder.show
      }
    },
  }
}
</script>

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

.button {
  cursor: pointer;
  margin-right: 0.5rem;
}
</style>
