<script>
  //IMPORT components
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
  import Creations from "./Creations.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div>
  <Header />
  <sections class="flex flex-col overflow-x-hidden gap-12 md:gap-16 lg:gap-32">
    <About />
    <Creations />
    <Contact />
  </sections>
  <Footer />
</div>
