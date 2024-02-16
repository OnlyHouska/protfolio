<script lang="ts">
  import linkIcon from "$lib/images/link.png";
  import discordLogo from "$lib/images/discord.svg";
  import instagramLogo from "$lib/images/instagram.svg";
  import githubLogo from "$lib/images/github.svg";
  import { onMount } from "svelte";

  var discord: string = "onlyhouska";
  var instagramRaw: string = "honza_kocanda";
  var instagram: string = `https://www.instagram.com/${instagramRaw}/`;
  var githubRaw: string = "onlyhouska";
  var github: string = `https://github.com/${githubRaw}`;

  var instagramButton: HTMLElement;
  var discordButton: HTMLElement;
  var githubButton: HTMLElement;

  function copyInfo(platform: string) {
    var copy: string = "undefined";
    var button: any;
    var reset: string;
    switch (platform) {
      case "discord":
        copy = discord;
        reset = discord;
        button = discordButton;
        break;
      case "instagram":
        copy = instagram;
        reset = instagramRaw;
        button = instagramButton;
        break;
      case "github":
        copy = github;
        reset = githubRaw;
        button = githubButton;
        break;
    }
    if (button) {
      button.innerHTML = "Copied!";
      setTimeout(() => {
        button.innerHTML =
          window.innerWidth >= 768 ? "Username: " + reset : reset;
      }, 1500);
    }
    navigator.clipboard.writeText(copy);
  }
</script>

<div
  id="copied"
  class="absolute bg-[#201f1f] z-50 text-white px-2 py-1 rounded-lg text-sm hidden"
>
  Copied!
</div>
<section
  class="flex flex-col realtive text-white font-semibold space-y-2 mx-[10%]"
  id="#contact"
>
  <h1
    id="sectionHeader"
    class="w-fit flex flex-row -ml-9 gap-3 mb-2 lg:text-3xl text-2xl hover:underline"
  >
    <a href="#contact" class="self-center">
      <img
        src={linkIcon}
        class="opacity-0 text-base transition-all duration-100 relative h-5"
        alt="link icon"
        id="sectionLinkIcon"
      />
    </a>
    Contact
  </h1>

  <div
    class="flex flex-col flex-wrap text-left font-normal ml-3 pb-3 text-base lg:text-lg"
  >
    <social class="flex flex-row flex-wrap gap-5 justify-center">
      <button
        on:click={() => copyInfo("discord")}
        id="discord"
        class="w-fit rounded-md shadow-lg py-1 px-2 gap-4 flex flex-row justify-center cursor-pointer md:20 md:flex-col md:px-4 lg:h-32"
        title="Copy"
      >
        <div class="flex flex-row gap-4 justify-center self-center">
          <img src={discordLogo} alt="discord contact" class="w-7" />
          <h1 class="hidden md:block">Discord</h1>
        </div>
        <p
          class="flex flex-row text-center self-center"
          id="socialSiteUsername"
          bind:this={discordButton}
        >
          <span class="hidden mr-1 md:block">Username:</span>{discord}
        </p>
      </button>

      <button
        on:click={() => copyInfo("instagram")}
        id="instagram"
        class="w-fit rounded-md shadow-lg py-1 px-2 gap-4 flex flex-row justify-center cursor-pointer md:20 md:flex-col md:px-4 lg:h-32"
        title="Copy"
      >
        <div class="flex flex-row gap-4 justify-center self-center">
          <img src={instagramLogo} alt="instagram contact" class="w-7" />
          <h1 class="hidden md:block">Instagram</h1>
        </div>
        <p
          class="flex flex-row text-center self-center"
          id="socialSiteUsername"
          bind:this={instagramButton}
        >
          <span class="hidden mr-1 md:block">Username:</span>{instagramRaw}
        </p>
      </button>

      <button
        on:click={() => copyInfo("github")}
        id="github"
        class="w-fit rounded-md shadow-lg py-1 px-2 gap-4 flex flex-row justify-center cursor-pointer md:20 md:flex-col md:px-4 lg:h-32"
        title="Copy"
      >
        <div class="flex flex-row gap-4 justify-center self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 40 40"
            fill="none"
            class="h-7 w-7 fill-white"
          >
            <path
              d="M20.5 0.493408C15.652 0.493605 10.9623 2.18364 7.2699 5.2611C3.57755 8.33857 1.12354 12.6027 0.346955 17.2904C-0.42963 21.9781 0.521894 26.7836 3.03127 30.8469C5.54064 34.9103 9.44412 37.9664 14.0432 39.4684C15.0641 39.6434 15.4469 39.0434 15.4469 38.5184C15.4469 38.0434 15.4213 36.4684 15.4213 34.7934C10.2916 35.7184 8.96456 33.5685 8.55622 32.4435C8.10313 31.3493 7.38487 30.3797 6.46352 29.6184C5.74893 29.2434 4.7281 28.3184 6.43797 28.2934C7.09087 28.3629 7.71707 28.5854 8.26351 28.9422C8.80995 29.2991 9.26053 29.7797 9.57706 30.3434C9.8563 30.8348 10.2318 31.2674 10.682 31.6164C11.1322 31.9654 11.6483 32.2239 12.2007 32.3772C12.7531 32.5305 13.3309 32.5755 13.9011 32.5096C14.4712 32.4438 15.0225 32.2683 15.5234 31.9934C15.6118 30.9766 16.0743 30.026 16.825 29.3185C12.2823 28.8185 7.53539 27.0934 7.53539 19.4435C7.5067 17.4558 8.25546 15.5326 9.6281 14.0685C9.00392 12.3409 9.07696 10.445 9.83226 8.76847C9.83226 8.76847 11.5421 8.24345 15.4468 10.8185C18.7876 9.91842 22.3144 9.91842 25.6552 10.8185C29.5598 8.21847 31.2698 8.76847 31.2698 8.76847C32.0252 10.445 32.0982 12.3409 31.4739 14.0685C32.8507 15.5301 33.6001 17.4549 33.5666 19.4435C33.5666 27.1184 28.7942 28.8185 24.2515 29.3185C24.7388 29.8022 25.114 30.3831 25.3518 31.0215C25.5896 31.6599 25.6844 32.341 25.6297 33.0185C25.6297 35.6935 25.6041 37.8434 25.6041 38.5185C25.6041 39.0435 25.9869 39.6685 27.0078 39.4685C31.5988 37.9542 35.491 34.8909 37.9897 30.8255C40.4884 26.7601 41.4309 21.9571 40.6489 17.2739C39.867 12.5907 37.4115 8.33215 33.7207 5.25843C30.03 2.18471 25.3443 0.495878 20.5 0.493408Z"
            />
          </svg>
          <h1 class="hidden md:block">Github</h1>
        </div>
        <p
          class="flex flex-row text-center self-center"
          id="socialSiteUsername"
          bind:this={githubButton}
        >
          <span class="hidden mr-1 md:block">Username:</span>{githubRaw}
        </p>
      </button>
    </social>
  </div>
</section>

<style>
  #sectionHeader:hover #sectionLinkIcon {
    opacity: 1;
  }

  #discord {
    background-image: linear-gradient(
      to right,
      #5865f2 0%,
      #717bee 51%,
      #5865f2 100%
    );
    transition: 0.5s;
    background-size: 200% auto;
  }
  #discord:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  #instagram {
    background-image: linear-gradient(
      40deg,
      #405de6 0%,
      #5b51d8 2%,
      #833ab4 10%,
      #e1306c 30%,
      #f56040 40%,
      #fcaf45 51%,
      #f56040 60%,
      #e1306c 70%,
      #833ab4 90%,
      #5b51d8 98%,
      #405de6 100%
    );
    transition: 0.5s;
    background-size: 200% auto;
  }
  #instagram:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  #github {
    background-image: linear-gradient(40deg, #333 0%, #3f3e3e 30%, #333 51%);
    transition: 0.5s;
    background-size: 200% auto;
  }
  #github:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
</style>
