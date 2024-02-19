<script lang="ts">
  //IMPORT FUNCTIONS
  import { onMount } from "svelte";

  //IMPORT IMAGES
  import logo from "$lib/images/logo-code-unfolded.png";
  import goUpImage from "$lib/images/left-arrow.svg";

  //Hide header on scroll && show "go up" button
  onMount(() => {
    var lastScrollTop: number = 0;
    var goUp: HTMLElement = document.getElementById("goUp") as HTMLElement;
    var nav: HTMLElement = document.querySelector("nav") as HTMLElement;

    var checkScrollHeight = (): boolean => {
      if (window.scrollY > 80) return true;
      else return false;
    };

    window.addEventListener(
      "scroll",
      function () {
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

    goUp.addEventListener("mouseenter", () => {
      goUp.style.transform = "translateY(-10px)";
    });
    goUp.addEventListener("mouseleave", () => {
      if (checkScrollHeight()) {
        goUp.style.transform = "translateY(0px)";
      }
    });
  });

  //Creations quick menu
  import { tiles } from "./Creations.svelte";
  onMount(() => {
    var creationsQuickMenu: HTMLElement = document.getElementById(
      "creationsQuickMenu"
    ) as HTMLElement;
    var creations: HTMLElement = document.getElementById(
      "creationsLabel"
    ) as HTMLElement;

    document.addEventListener("scroll", () => {
      creationsQuickMenu.classList.remove("flex");
      creationsQuickMenu.classList.add("hidden");
    });
    document.addEventListener("keydown", (event) => {
      if (event.key == "Escape") {
        creationsQuickMenu.classList.remove("flex");
        creationsQuickMenu.classList.add("hidden");
      }
    });
    if (creations && creationsQuickMenu) {
      creations?.addEventListener("click", () => {
        creationsQuickMenu.classList.toggle("flex");
        creationsQuickMenu.classList.toggle("hidden");
      });
    }
  });
</script>

<header>
  <div
    class="object-fill w-full h-full -z-50 bg-cover fixed inset-0 bg-main-bg"
  ></div>

  <a
    href="./"
    id="goUp"
    class="mr-5 right-0 fixed flex justify-center rounded-full bg-white/20 mt-20 aspect-square -translate-y-40 transition-all opacity-90 h-8 md:h-10"
  >
    <img src={goUpImage} alt="go up" class="rotate-90" />
  </a>

  <nav
    class="justify-between font-semibold fixed text-lg inset-0 pl-4 pr-7 w-full flex flex-row z-40 text-[#a3a3a3] h-16 transition-all duration-300 bg-[#1a1919] py-2 lg:hover:opacity-90 lg:h-20"
  >
    <div class="flex flex-row gap-4 self-center">
      <img src={logo} alt="Logo" class="hidden md:inline md:h-12 lg:h-14" />
      <p id="navName" class="relative self-center lg:text-xl">OnlyHouska</p>
    </div>

    <ul
      id="headerItems"
      class="flex flex-row gap-3 text-[#dedcdc] font-normal text-base lg:text-lg"
    >
      <li class="cursor-pointer self-center">
        <a href="#about" class="md:hover:underline">About</a>
      </li>
      <li
        class="cursor-pointer self-center border-l-2 pl-2 border-[#a3a3a3] flex flex-col"
      >
        <a href="#creations" class="md:hover:underline">Creations</a>
        <p
          class="absolute self-center mt-4 md:hover:translate-y-1 transition-all"
          id="creationsLabel"
        >
          &or;
        </p>
        <div
          id="creationsQuickMenu"
          class="absolute mt-12 border-2 py-1 px-2 border-white rounded-md backdrop-blur-sm hidden flex-col"
        >
          {#each tiles as tile}
            <a class="md:hover:underline" href={tile.link}>{tile.label}</a>
          {/each}
        </div>
      </li>
      <li class="cursor-pointer self-center border-l-2 pl-2 border-[#a3a3a3]">
        <a href="#contact" class="md:hover:underline">Contact me</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  @media only screen and (min-width: 768px) {
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
  @media only screen and (max-width: 768px) {
    #creationsLabel:hover ~ #creationsQuickMenu {
      display: flex;
    }
  }
</style>
