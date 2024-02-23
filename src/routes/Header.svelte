<script lang="ts">
  //IMPORT essentials
  import { onMount } from "svelte";
  import { tiles } from "./Creations.svelte";

  //IMPORT images
  import logo from "$lib/images/logo-code-unfolded.png";
  import goUpImage from "$lib/images/left-arrow.svg";

  //DEFINE hamburger menu elements
  var hamburgerMenuButton: HTMLElement;
  var hmbrFirst: HTMLElement;
  var hmbrSecond: HTMLElement;
  var navMenu: HTMLElement;

  //FUNCTION open hamburger menu
  onMount((): void => {
    //check if device is small size
    if (window.innerWidth < 768) {
      hamburgerMenuButton.addEventListener("click", toggleMenu);

      //FUNCTION toggles classes to open/close hamburger menu
      function toggleMenu(): void {
        //rotate button
        hmbrFirst.classList.toggle("rotate-45");
        hmbrSecond.classList.toggle("-rotate-45");

        //adjust button position
        hmbrFirst.classList.toggle("translate-x-[3px]");
        hmbrSecond.classList.toggle("-translate-y-2");
        hmbrSecond.classList.toggle("translate-x-[3px]");

        //toggle menu
        navMenu.classList.toggle("hidden");
        navMenu.classList.toggle("flex");
      }

      //CHECK for ESC button pres && scroll
      document.addEventListener("scroll", forceCloseMenu);
      document.addEventListener("keydown", (event): void => {
        checkForEscapeButton(event);
      });

      //FUNCTION check if escape button is pressed
      function checkForEscapeButton(event: KeyboardEvent): void {
        if (event.key == "Escape") forceCloseMenu();
      }

      //FUNCTION close menu on scroll && ESC button press
      function forceCloseMenu(): void {
        //remove menu classes
        navMenu.classList.remove("flex");
        navMenu.classList.add("hidden");

        //reset button rotation + move
        hmbrFirst.classList.remove("rotate-45");
        hmbrSecond.classList.remove("-rotate-45");

        hmbrFirst.classList.remove("translate-x-[3px]");
        hmbrSecond.classList.remove("-translate-y-2");
        hmbrSecond.classList.remove("translate-x-[3px]");
      }
    }
  });

  //DEFINE "scroll navbar" elements
  var goUp: HTMLElement;
  var nav: HTMLElement;
  //FUNCTION hide header on scroll && show "go up" button
  onMount((): void => {
    var lastScrollTop: number = 0;

    var checkScrollHeight = (): boolean => {
      if (window.scrollY > 80) return true;
      else return false;
    };

    window.addEventListener(
      "scroll",
      function (): void {
        var st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (checkScrollHeight()) {
          if (st > lastScrollTop) {
            // downscroll code
            nav.style.transform = "translateY(-100px)";
            goUp.style.transform = "translateY(0)";
          } else if (st < lastScrollTop) {
            // upscroll code
            nav.style.transform = "translateY(0px)";
            goUp.style.transform = "translateY(-160px)";
          }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );

    goUp.addEventListener("mouseenter", (): void => {
      goUp.style.transform = "translateY(-10px)";
    });
    goUp.addEventListener("mouseleave", (): void => {
      if (checkScrollHeight()) {
        goUp.style.transform = "translateY(0px)";
      }
    });
  });

  //DEFINE QCM elements
  var creationsQuickMenu: HTMLElement;
  var creationsLabel: HTMLElement;
  //FUNCTION show creations quick menu
  onMount((): void => {
    if (window.innerWidth >= 768) {
      document.addEventListener("scroll", (): void => {
        creationsQuickMenu.classList.remove("flex");
        creationsQuickMenu.classList.add("hidden");
      });
      document.addEventListener("keydown", (event): void => {
        if (event.key == "Escape") {
          creationsQuickMenu.classList.remove("flex");
          creationsQuickMenu.classList.add("hidden");
        }
      });
      creationsLabel.addEventListener("click", (): void => {
        creationsQuickMenu.classList.toggle("flex");
        creationsQuickMenu.classList.toggle("hidden");
      });
    }
  });
</script>

<header>
  <a
    href="./"
    bind:this={goUp}
    class="mr-5 right-0 fixed flex justify-center rounded-full bg-white/20 mt-20 aspect-square -translate-y-40 transition-all opacity-90 h-8 md:h-10"
  >
    <img src={goUpImage} alt="go up" class="rotate-90" />
  </a>

  <nav
    bind:this={nav}
    class="justify-between font-semibold fixed text-lg inset-0 pl-4 pr-7 w-full flex flex-row z-40 text-[#a3a3a3] h-16 transition-all duration-300 py-2 lg:h-20"
  >
    <div class="flex flex-row gap-4 self-center">
      <img src={logo} alt="Logo" class="hidden md:inline md:h-12 lg:h-14" />
      <p id="navName" class="relative self-center lg:text-xl">OnlyHouska</p>
    </div>

    <div
      class="md:hidden flex flex-col gap-2 absolute right-10 self-center"
      bind:this={hamburgerMenuButton}
    >
      <div
        class="h-[1.5px] w-5 bg-white transition-all"
        bind:this={hmbrFirst}
      ></div>
      <div
        class="h-[1.5px] w-5 bg-white transition-all"
        bind:this={hmbrSecond}
      ></div>
    </div>
    <ul
      bind:this={navMenu}
      id="headerItems"
      class="md:flex-row gap-3 text-[#dedcdc] font-normal text-base lg:text-lg md:border-none md:w-auto md:h-auto md:p-0 md:backdrop-blur-none md:mt-0 md:flex py-1 px-2 flex-col border-2 h-fit w-fit rounded-md backdrop-blur-lg mt-14 hidden"
    >
      <li class="cursor-pointer self-center">
        <a href="#about" class="lg:hover:underline">About</a>
      </li>
      <li
        class="cursor-pointer self-center md:border-l-2 pl-2 border-[#a3a3a3] flex flex-col"
      >
        <a href="#creations" class="lg:hover:underline">Creations</a>
        <p
          class="absolute self-center mt-4 lg:hover:translate-y-1 transition-all hidden md:block"
          id="creationsLabel"
          bind:this={creationsLabel}
        >
          &or;
        </p>
        <div
          id="creationsQuickMenu"
          bind:this={creationsQuickMenu}
          class="absolute mt-12 border-2 py-1 px-2 border-white rounded-md backdrop-blur-sm hidden flex-col overflow-y-auto max-h-32 max-w-22"
        >
          {#each tiles as tile}
            <a class="lg:hover:underline text-wrap" href={tile.link}
              >{tile.label}</a
            >
          {/each}
        </div>
      </li>
      <li
        class="cursor-pointer self-center md:border-l-2 pl-2 border-[#a3a3a3]"
      >
        <a href="#contact" class="lg:hover:underline">Contact me</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  :root {
    --navBgOpacityOnHover: 0.9;
  }

  nav {
    background-color: rgba(26, 25, 25, 1);
  }
  @media only screen and (min-width: 1024px) {
    nav:hover {
      background-color: rgb(26, 25, 25, var(--navBgOpacityOnHover));
    }
    @keyframes slideIn {
      0% {
        transform: translateX(-50px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    #navName {
      display: inline-block;
      animation: slideIn 0.5s ease forwards;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    #creationsLabel:hover ~ #creationsQuickMenu {
      display: flex;
    }
  }
</style>
