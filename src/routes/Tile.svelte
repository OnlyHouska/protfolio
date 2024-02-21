<script>
  export var label = "";
  export var description = "";
  export var link = "";
</script>

<tile
  class="flex flex-row md:flex-col md:hover:scale-[1.04] gap-3 text-center transition-all duration-500 relative text-white mx-7 md:gap-0 border-orange-300 border-[1px] rounded-lg p-5 pb-6 pt-8 backdrop-blur-sm max-w-[350px] w-full tracking-wide h-fit md:h-80"
  title={label}
>
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
    >Check more &gt;</a
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

  @media only screen and (min-width: 768px) {
    a:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
    }
  }
  a:active {
    opacity: 0.8;
  }
</style>
