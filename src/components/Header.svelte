<script lang="ts">
    //IMPORT COMPONENTS
    import Menu from "./menu.svelte";

    // import { onMount } from 'svelte';
</script>

<main class="header">
    <h1 class="header-title">
        only
    </h1>
    <p class="header-text">
        hey<br>
        look around and hit me up!
    </p>
    <Menu />
</main>

<style lang="scss">
  $headerFolded: 4rem;
  $headerFoldDelay: 2000ms;

  @keyframes fold {
    0% {
      height: 100vh;
    }
    100% {
      height: $headerFolded;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @keyframes moveTitle {
    0% {
      font-size: var(--font-size-2xl);
    }
    100% {
      font-size: var(--font-size-lg);
      margin-right: auto;
    }
  }
  @keyframes moveText {
    100% {
      transform: translateX(-500%);
    }
  }

  .header {
    position: fixed;
    top: 0;
    animation: fold 800ms forwards $headerFoldDelay;

    background: var(--linearPrimarySecondary);
    width: 100vw;
    height: 100vh;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-title {
      font-size: var(--font-size-2xl);
      animation: moveTitle 800ms forwards $headerFoldDelay;
    }

    &-text {
      margin-top: 10rem;
      position: absolute;
      text-align: center;
      font-size: var(--font-size-sm);
      animation: moveText 800ms forwards $headerFoldDelay;
    }
  }
</style>