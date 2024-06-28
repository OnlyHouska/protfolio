<script lang="ts">
    //IMPORT ESSENTIALS
    import { onMount } from 'svelte';
    import {categories} from "../lib/scripts/global";

    //DEFINE VARIABLES
    let menuVisible: boolean = false;

    //DEFINE ELEMENTS
    let menuButton: HTMLElement;
    let menu: HTMLElement;

    onMount(main);

    //FUNCTION TO RUN ON MOUNT
    function main() {
      //TOGGLE MENU ON CLICK
      menuButton.addEventListener('click', toggleMenu);

      //HIDE MENU ON SCROLL
      document.body.addEventListener('scroll', () => {
        if (menuVisible)
          toggleMenu();
      });
    }

    //TOGGLE MENU VISIBILITY
    function toggleMenu() {
      if (menuButton) {
        menuVisible = !menuVisible;
        menuButton.classList.toggle('menu-button-active');
      }
    }
</script>

<main class="menu" bind:this={menu}>
  <div bind:this={menuButton} class="menu-button {menuVisible ? 'menu-active' : ''}">
    <div class="menu-button-line"></div>
    <div class="menu-button-line"></div>
    <div class="menu-button-line"></div>
  </div>
  {#if menuVisible}
    <div class="menu-dropdown">
      <ul>
        {#each categories as category}
          <li>
            <a href={`#${category}`}># {category}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</main>

<style lang="scss">
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .menu {
    animation: show 800ms forwards 2000ms;
    opacity: 0;

    &-dropdown {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 4.6rem;
      margin-right: 4.6rem;
      padding: 1rem;
      border: white 1px solid;
      border-radius: var(--radius);
      background: var(--secondary);
      ul, ol {
        list-style: none;
        text-align: center;
        li {
          a {
            color: var(--text-color);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .menu-button {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
    margin-right: 3rem;
    width: 2rem;
    cursor: pointer;

    &-line {
      width: 100%;
      height: 2px;
      background: var(--text-color);
      transition: 300ms;
    }
  }

  .menu-active {
    .menu-button-line:nth-child(1) {
      transform-origin: center;
      transform: rotate(45deg) translateY(0.8rem);
    }
    .menu-button-line:nth-child(2) {
      transform-origin: left;
      transform: scaleX(0);
    }
    .menu-button-line:nth-child(3) {
      transform-origin: center;
      transform: rotate(-45deg) translateY(-0.8rem);
    }
  }

</style>
