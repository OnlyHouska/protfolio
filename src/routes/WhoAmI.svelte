<script>
  import linkIcon from "$lib/images/link.png";
</script>

<section
  class="flex flex-col realtive text-white font-semibold space-y-2 mx-[10%]"
  id="#about"
>
  <h1
    id="sectionHeader"
    class="w-fit flex flex-row -ml-9 gap-3 mt-32 mb-2 lg:text-3xl text-2xl"
  >
    <a href="#about" class="self-center">
      <img
        src={linkIcon}
        class="opacity-0 text-base transition-all duration-100 relative h-5"
        alt="link icon"
        id="sectionLinkIcon"
      />
    </a>
    Who am I?
  </h1>

  <div
    class="flex flex-col flex-wrap text-left font-normal ml-3 border-b-2 border-white/20 pb-3 text-base lg:text-lg"
  >
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ullam, nulla
      esse magni tempora laudantium nam, unde quos sequi mollitia quaerat est
      alias provident ipsam, in ipsum similique cumque accusantium?
    </p>
  </div>
</section>

<style>
  #sectionHeader:hover #sectionLinkIcon {
    opacity: 1;
  }
</style>
