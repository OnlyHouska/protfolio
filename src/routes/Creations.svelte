<script lang="ts" context="module">
  import Tile from "./Tile.svelte";
  import linkIcon from "$lib/images/link.png";

  export const tiles = [
    {
      label: "Frontools",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quibusdam officiis soluta suscipit harum quam animi modi! Consequuntur accusantium, molestiae vero laudantium ducimus error esse et voluptatem dolorum rem dicta!",
      link: "https://example.com/frontools",
    },
    {
      label: "Example",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quibusdam officiis soluta suscipit harum quam animi modi! Consequuntur accusantium, molestiae vero laudantium ducimus error esse et voluptatem dolorum rem dicta!",
      link: "https://example.com/",
    },
    {
      label: "Example",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quibusdam officiis soluta suscipit harum quam animi modi! Consequuntur accusantium, molestiae vero laudantium ducimus error esse et voluptatem dolorum rem dicta!",
      link: "https://example.com/",
    },
  ];
</script>

<section
  class="flex flex-col realtive text-white font-semibold space-y-2 mx-[10%] transition-all"
  id="creations"
>
  <h1
    id="sectionHeader"
    class="w-fit flex flex-row -ml-9 gap-3 mb-2 lg:text-3xl text-2xl md:hover:underline md:hover:tracking-widest transition-all"
  >
    <a href="#creations" class="self-center">
      <img
        src={linkIcon}
        class="opacity-0 text-base transition-all duration-100 relative h-5"
        alt="link icon"
        id="sectionLinkIcon"
      />
    </a>
    Creations
  </h1>

  <tiles class="flex flex-row flex-wrap gap-10 w-full justify-center">
    {#each tiles as tile}
      <Tile
        label={tile.label}
        description={tile.description}
        link={tile.link}
      />
    {/each}
  </tiles>
</section>

<style>
  @media only screen and (min-width: 768px) {
    #sectionHeader:hover #sectionLinkIcon {
      opacity: 1;
    }
  }
</style>
