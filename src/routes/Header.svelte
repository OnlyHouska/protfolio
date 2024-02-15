<script>
  import logo from "$lib/images/logo-code-unfolded.png";

  // let sidebar = document.getElementById("sidebar");
  let headerActive = false;
  function toggleHeader() {
    headerActive = !headerActive;
    if (headerActive) {
      // sidebar?.style.transform = 'translate';
    } else {
    }
  }
</script>

<header>
  <img
    alt="background"
    class="object-fill w-full h-full -z-50 bg-cover fixed inset-0 bg-main-bg"
  />
  <nav
    class="font-semibold fixed text-lg inset-0 pl-4 pr-7 w-full flex flex-row justify-between z-40 text-[#a3a3a3] h-16 transition-all duration-300 bg-[#1a1919] py-2"
  >
    <div class="flex flex-row gap-4">
      <img src={logo} alt="Logo" />
      <p class="relative self-center">OnlyHouska</p>
    </div>
    <button
      id="navbarButton"
      class="relative justify-evenly flex flex-col py-2 ml-auto w-fit"
      on:click={toggleHeader}
    >
      <div class="w-6 h-[2px] bg-[#cccccc] relative"></div>
      <div class="w-6 h-[2px] bg-[#cccccc] realtive"></div>
      <sidebar id="sidebar" class="absolute flex flex-col bg-[#1a1919] z-50">
      </sidebar>
    </button>
  </nav>
</header>

<style>
  :root {
    --sidebar-width: 52px;
  }
  button * {
    transition: all 0.2s;
  }
  button:focus #sidebar {
    transform: translateX(0);
  }
  #sidebar {
    padding: 10px 0;
    background: #ffffff;
    width: var(--sidebar-width);
    transform: translateX(var(--sidebar-width));
  }
</style>
