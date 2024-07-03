<script lang="ts">
  //DEFINE PROPS
  export let right: boolean;
  export let src: string;
</script>

<main class="project">
  <div class="project__upper" class:project__upper--right={right} class:project__upper--left={!right}>
    <div class="project__upper-image-container">
      <img class="project__upper-image" {src} alt="Project thumbnail">
      <div class="project__upper-version" class:project__upper-version--right={right} class:project__upper-version--left={!right}>
        <slot name="version"></slot>
      </div>
    </div>
    <div class="project__upper-text">
      <slot name="description"></slot>
    </div>
  </div>
  <div class="project__lower" class:project__lower--right={right} class:project__lower--left={!right}>
    <div class="project__lower-title">
      <slot name="title"></slot>
      <div class="project__lower-title-underline"></div>
    </div>
  </div>
</main>

<style lang="scss">
  .project {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    color: white;
    text-decoration: none;

    &__upper, &__lower {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &__upper {
      gap: .5rem;
      &--right {
        grid-template-areas: "text image" "text version"; // Corrected the grid-template-areas
      }
      &--left {
        grid-template-areas: "image text" "version text";
      }

      &-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--radius);
        transition: all var(--transition-duration);

        &-container {
          grid-area: image;
          position: relative;
        }
      }
      &-text {
        grid-area: text;
        text-align: center;
        align-self: center;
        font-size: var(--font-size-sm);
      }
      &-version {
        display: flex;
        transition: all var(--transition-duration);
        &--right {
          right: 0;
          border-top-right-radius: var(--radius);
        }
        &--left {
          left: 0;
          border-top-left-radius: var(--radius);
        }
        background: rgba(0, 0, 0, 0.5);
        padding: .2rem;
        position: absolute;
        top: 0;
        font-size: var(--font-size-xs);
        grid-area: version;
      }
    }

    &__lower {
      display: flex;
      flex-direction: row;

      &--right {
        justify-content: flex-end;
      }
      &--left {
        justify-content: flex-start;
      }

      &-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: fit-content;
        flex-direction: column;

        &-underline {
          transition: all var(--transition-duration);
          width: 100%;
          height: 2px;
          background-color: var(--primary);
          transform: scaleX(0);
          transform-origin: 0 0;
        }
      }
    }
    &:hover {
      .project__lower-title-underline {
        transform: scaleX(1);
      }

      .project__upper-image, .project__upper-version {
        border-radius: 0;
      }
    }
  }
</style>