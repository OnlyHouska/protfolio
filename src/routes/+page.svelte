<script>
  import Tile from "./Tile.svelte";
  import WhoAmI from "./WhoAmI.svelte";

  const tiles = [
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
    {
      label: "Example",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quibusdam officiis soluta suscipit harum quam animi modi! Consequuntur accusantium, molestiae vero laudantium ducimus error esse et voluptatem dolorum rem dicta!",
      link: "https://example.com/",
    },
  ];

  function getInfo(index = 0, get = "") {
    switch (get) {
      case "label":
        return tiles[index].label;
      case "desc":
        return tiles[index].description;
      case "link":
        return tiles[index].link;
      default:
        return "Cannot find value " + get;
    }
  }

  let i = 0;
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<sections class="flex flex-col gap-32 overflow-x-hidden">
  <WhoAmI />

  <section
    class="flex flex-row flex-wrap gap-10 w-full justify-center"
    id="creations"
  >
    {#each tiles as tile}
      <Tile
        label={tile.label}
        description={tile.description}
        link={tile.link}
      />
    {/each}
  </section>
</sections>
