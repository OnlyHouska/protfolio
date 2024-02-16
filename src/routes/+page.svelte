<script>
  import WhoAmI from "./WhoAmI.svelte";
  import Contact from "./Contact.svelte";
  import Creations from "./Creations.svelte"
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<sections class="flex flex-col overflow-x-hidden gap-12 md:gap-16 lg:gap-32 ">
  <WhoAmI />

  <Creations />

  <Contact />
</sections>
