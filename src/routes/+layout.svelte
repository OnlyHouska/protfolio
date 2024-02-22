<script lang="ts" context="module">
  //IMPORT essentials
  import "../app.css";
</script>

<div class="app">
  <div
    class="object-fill w-full h-full -z-50 bg-cover fixed inset-0 bg-main-bg"
  ></div>
  <main>
    <slot />
  </main>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap");

  :global(body) {
    overflow-x: hidden;
    background: #1a1919;
  }
  :global(html) {
    font-family: "Kanit", "Segoe UI";
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
