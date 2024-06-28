<script lang="ts">
  //IMPORT COMPONENTS
  import Header from "./category_header.svelte";

  //DEFINE VARIABLES
  export let category: string;
</script>

<main id="{category}">
  <Header titleText={category} />
</main>

<style lang="scss"></style>