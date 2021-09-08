<template>
  <div id="app" class="flex container h-screen w-full">
    <div class="w-1/5 border-r border-lighter px-8 py-2 ">
      <SidebarLeft />
    </div>
    
  </div>
</template>

<script>
import SidebarLeft from './components/SidebarLeft.vue'

export default {
  name: 'App',
  components: {
    SidebarLeft
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
