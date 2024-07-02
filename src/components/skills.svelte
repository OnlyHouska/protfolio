<script lang="ts">
  //IMPORT COMPONENTS
  import Tile from "./skill_tile.svelte";

  //DEFINE VARIABLES
  let skills: string[] = ["HTML, CSS", "JavaScript, TypeScript", "Svelte", ".NET", "Nette, Latte", "PHP"];
</script>

<main class="skills">
  <div class="skills__background-line"></div>
  <!--!SKILLS-->
  {#each skills as skill}
    <Tile {skill} />
  {/each}
</main>

<style lang="scss">
  .skills {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 1rem;
    align-content: center;

    margin-top: 3rem;

    &__background-line {
      z-index: -50;
      position: absolute;
      width: 100%;
      left: 0;
      top: 50%;
      height: 2rem;
      background-color: var(--primary);
      opacity: .25;
    }
  }
</style>