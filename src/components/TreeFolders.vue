<template>
  <div className="wrapper-tree">
    <RowItem class="container"
              :treeFolders="treeFoldersState"
              @deleteItem = "onDelete"
    ></RowItem>
  </div>
</template>

<script  lang="ts">
import { useTreeFoldersStore } from "@/stores/TreeFoldersStore";
import { defineComponent } from "vue";
import RowItem from "@/components/RowItem.vue";
import { mapActions, mapState } from "pinia";
import type Itree from "@/stores/model";

export default defineComponent({
  components: { RowItem },
  computed:{
    ...mapState(useTreeFoldersStore,{
      treeFoldersState: state => state.data,
    })
  },
  methods: {
    ...mapActions(useTreeFoldersStore,["deleteItemActions"] ),
    onDelete ( treeFolder: Itree) {
      this.deleteItemActions(treeFolder)
    }
  }
})
</script>

<style scoped>
.wrapper-tree {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;

}
.container {
  border: 1px solid #ccc;
  padding: 2rem;
}
</style>
