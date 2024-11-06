<script lang="ts">

  export default {
    props: {
      treeFolders: {
        required: true,
      }
    }
  }

</script>

<template>
      <ul class="folder" v-for="treeFolder in treeFolders">
        <span>{{ treeFolder.name }}</span>
          <li class="file">
            <span>{{ treeFolder.children }}</span>
          </li>
      </ul>
</template>

<style scoped>
      .file {
        margin-left: 3rem;
      }
</style>
