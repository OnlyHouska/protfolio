<script lang="ts">
  //DEFINE export variables
  export var label: string = "\0";
  export var description: string = "\0";
  export var link: string = "\0";
  export var local: boolean = false;

  //FUNCTION check if local path is used
  function usedLocalPath(): string {
    return local ? getLocalPath() : link;
  }
  //FUNCTION get local path
  function getLocalPath(): string {
    return `./${label}/`;
  }
</script>

<tile
  class="flex flex-row md:flex-col lg:hover:scale-[1.04] gap-3 text-center transition-all duration-500 relative text-white mx-7 md:gap-0 border-orange-300 border-[1px] rounded-lg p-5 pb-6 pt-8 backdrop-blur-sm max-w-[350px] w-full tracking-wide h-fit md:h-60 lg:h-80"
  title={usedLocalPath()}
>
  <p class="hidden md:block lg:hidden absolute left-3 top-1 text-xs text-white/80">Scroll &or;</p>
  <h2
    class="text-xl font-semibold tracking-wider md:mb-2 md:border-b-2 border-white/50 md:pb-2"
  >
    {label}
  </h2>
  <p class="hidden md:block text-wrap overflow-hidden max-h-48 overflow-y-auto">
    {description}
  </p>
  <a
    href={link}
    class="text-sm cursor-pointer text-white font-semibold border-orange-900 border-2 rounded-md px-2 py-1 w-fit z-20 md:mt-4 relative block m-auto"
    >Visit &gt;</a
  >
</tile>

<style>
  tile {
    margin: 10px;
    padding: 15px 45px;
  }
  a {
    background-image: linear-gradient(
      to right,
      #ff512f 0%,
      #f09819 51%,
      #ff512f 100%
    );
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    display: block;
  }

  @media only screen and (min-width: 1024px) {
    a:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
    }
  }
  a:active {
    opacity: 0.8;
  }
</style>
