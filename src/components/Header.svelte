<script lang="ts">
    //IMPORT COMPONENTS
    import Menu from "./menu.svelte";
    import Loading from "./loading.svelte";

    //DEFINE VARIABLES
    let headerFolder: boolean = false;

    setTimeout(() => {
        headerFolder = true;
    }, 2000);
</script>

<main class="header">
  <h1 class="header-title">
    only
  </h1>
  <p class="header-text">
    hey<br>
    look around and hit me up!
  </p>
  {#if !headerFolder}
    <div class="header-loading">
      <Loading />
    </div>
  {/if}
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
    z-index: 50;
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

    &-loading {
      margin-top: 5rem;
    }

    &-title {
      font-size: var(--font-size-title);
      animation: moveTitle 800ms forwards $headerFoldDelay;
    }

    &-text {
      margin-top: 6rem;
      position: absolute;
      text-align: center;
      font-size: var(--font-size-md);
      animation: moveText 800ms forwards $headerFoldDelay;
    }
  }
</style>