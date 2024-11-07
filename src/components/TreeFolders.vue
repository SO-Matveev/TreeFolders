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

  <div className="container">
    <div className="wrapper-tree">
        <row-item :treeFolders = "treeFoldersState"></row-item>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-width: 30rem;
  margin: 0 auto;
}
.wrapper-tree {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border: 1px solid #ccc;
}
</style>
