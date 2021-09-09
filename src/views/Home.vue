<template>
  <div>
    <div id="app" class="flex container h-screen w-full">
      <div class="w-1/5 border-r border-lighter px-8 py-2">
        <SidebarLeft />
      </div>
      <div class="w-1/2 h-full overflow-y-scroll">
        <MainSection />
      </div>
      <div
        class="
          w-1/3
          h-full
          border-l border-lighter
          px-8
          py-2
          relative
          overflow-y-scroll
          md:block
          hidden
        "
      >
        <SidebarRight />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarLeft from "../components/SidebarLeft.vue";
import SidebarRight from "../components/SidebarRight.vue";
import MainSection from "../components/MainSection.vue";
export default {
  name: "Home",
  components: {
    SidebarLeft,
    MainSection,
    SidebarRight,
  },
};
</script>

<style>
</style>