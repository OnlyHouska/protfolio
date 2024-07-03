<script lang="ts">
  //DEFINE VARIABLES
  export let titleText: string;
</script>

<main class="category__header">
  <h1 class="category__header-title">
    # {titleText}
  </h1>
  <div class="category__header-underline"></div>
</main>

<style lang="scss">
  .category {
    &__header {
      margin-bottom: 1rem;
      &-underline {
        height: 1px;
        width: 100%;
        background: var(--secondary);
      }
    }
  }
</style>