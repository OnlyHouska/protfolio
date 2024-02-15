<script>
  var id = "sect-1";
  import linkIcon from "$lib/images/link.png";
</script>

<section class="flex flex-col realtive text-white font-semibold space-y-2" {id}>
  <h1
    id="sectionHeader"
    class="text-3xl inline-flex flex-row -ml-9 gap-3 mt-32"
  >
    <a href={"#" + id} class="self-center">
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
    class="flex flex-col flex-wrap text-left text-lg font-normal ml-3 border-b-[1]"
  >
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ullam, nulla
      esse magni tempora laudantium nam, unde quos sequi mollitia quaerat est
      alias provident ipsam, in ipsum similique cumque accusantium?
    </p>
  </div>

  <div class="h-[2px] bg-white/20 w-full mb-5"></div>
</section>

<style>
  #sectionHeader:hover #sectionLinkIcon {
    opacity: 1;
  }
</style>
