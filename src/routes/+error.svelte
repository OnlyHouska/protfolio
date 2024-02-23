<script lang="ts">
  //IMPORT essentials
  import { onMount } from "svelte";

  //FUNCTION redirect to main page
  onMount((): void => {
    window.location.href = "./";
  });
</script>
