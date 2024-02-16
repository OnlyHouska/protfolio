<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap");

  :global(body) {
    overflow-x: hidden;
    background: #1a1919;
  }
  :global(html) {
    font-family: "Kanit", sans-serif;
    padding: 0;
    height: 100vh;
    user-select: none;
    scroll-behavior: smooth;
    scrollbar-gutter: initial;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  :global(*) {
    scrollbar-width: auto;
    scrollbar-color: #ad5c00 #1a1919;
  }

  /* Chrome, Edge, and Safari */
  :global(*::-webkit-scrollbar) {
    width: 5px;
  }

  :global(*::-webkit-scrollbar-track) {
    background-color: transparent;
  }

  :global(*::-webkit-scrollbar-thumb) {
    background-color: #ad5c00;
    border-radius: 5px;
    border: 2px solid transparent;
  }
</style>
