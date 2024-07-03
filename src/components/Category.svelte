<script lang="ts">
  //IMPORT COMPONENTS
  import Header from "./category_header.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import Links from "./links.svelte";
  
  //DEFINE VARIABLES
  export let category: string;
</script>

<main id="{category}">
  <Header titleText={category} />

  <!--!SWITCH CATEGORY BODY-->
  {#if category === "skills"}
    <Skills />
    {:else if category === "projects"}
      <Projects />
    {:else if category === "links"}
      <Links />
  {/if}
</main>

<style lang="scss"></style>