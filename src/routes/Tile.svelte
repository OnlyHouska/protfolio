<script>
  export var label = "";
  export var description = "";
  export var link = "";
</script>

<tile
  class="transition-all relative flex flex-col text-white mx-7 gap-2 border-gray-300 border-[1px] rounded-lg p-5 pb-6 pt-8 backdrop-blur-sm max-w-[350px] w-full tracking-wide"
>
  <h2 class="text-xl font-semibold tracking-wider">{label}</h2>
  <p>
    {description}
  </p>
  <a
    href={link}
    class="text-sm hover:underline cursor-pointer text-white font-semibold border-white border-2 rounded-md px-2 py-1 w-fit z-20 mt-4 relative block m-auto"
    >Check more &gt;</a
  >
</tile>

<style>
  tile {
    background-image: linear-gradient(
      to right,
      #232526 0%,
      #414345 51%,
      #232526 100%
    );
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: block;
  }

  tile:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
</style>
