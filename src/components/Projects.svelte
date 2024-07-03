<script lang="ts">
    // IMPORT DATA
    import projects from "./../lib/data/projects.json";

    // IMPORT COMPONENTS
    import Project from "./project.svelte";
    import Loading from "./loading.svelte";
</script>

<main class="projects">
  {#if Object.keys(projects).length > 0}
    {#each Object.entries(projects) as [key, value]}
      <Project right={+value.id % 2 === 0} src={value.image}>
        <a slot="title" href={value.link} target="_blank">{key}</a>
        <p slot="version">{value.version}</p>
        <p slot="description">{value.description}</p>
      </Project>
    {/each}
  {:else}
    <Loading />
  {/if}
</main>

<style lang="scss">
  .projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
