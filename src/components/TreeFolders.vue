<script  lang="ts">
import { useTreeFoldersStore } from "@/stores/TreeFoldersStore";
import { defineComponent } from "vue";
import RowItem from "@/components/RowItem.vue";
import { mapState } from "pinia";

export default defineComponent({
  components: { RowItem },
  computed:{
    ...mapState(useTreeFoldersStore,{
      treeFoldersState: state => state.$state,
    })
  }
})

</script>

<template>
  <div className="wrapper-tree">
    <row-item class="container" :treeFolders="treeFoldersState"></row-item>
  </div>
</template>

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
