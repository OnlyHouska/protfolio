<script lang="ts">
  //IMPORT COMPONENTS
  import {onMount} from "svelte";

  //DEFINE VARIABLES
  export let skill: string;
  let src: string = "https://via.placeholder.com/150";

  onMount(main);

  //FUNCTION TO RUN ON MOUNT
  async function main() {
      //LOAD THE IMAGE BY DYNAMICALLY IMPORTING IT
      try {
          let imagePath = skill.toLowerCase().replace(', ', '_',);
          const image = await import(`../lib/images/${imagePath}.png`);
          src = image.default;
      } catch (error) {
          console.error("Error loading image:", error);
      }
  }

</script>

<main class="skills__tile">
  <img class="skills__tile-image" {src} alt="Skill icon" />
  <div class="skills__tile-title">
    <h3 class="skills__tile-text">{skill}</h3>
    <div class="skills__tile-underline"></div>
  </div>
</main>

<style lang="scss">
  .skills {
    &__tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      * {
        transition: all var(--transition-duration);
      }
      &-image {
        border-radius: var(--radius);
        width: 5em;
        height: 6em;
      }
      &-title {
        margin-top: 0.5rem;
        text-align: center;
        font-size: 1em;
        width: 100%;
      }
      .skills__tile-underline {
        width: 100%;
        height: 2px;
        background-color: var(--primary);
        transform: scaleX(0);
        transform-origin: 0 0;
      }

      &:hover {
        .skills__tile-underline {
          transform: scaleX(1);
        }
        .skills__tile-image {
          border-radius: 0;
        }
      }
    }
  }
</style>