<template>
  <div>
    <button
      class="h-12 w-12 ml-2 hover:bg-lightblue text-3xl rounded-full text-blue"
    >
      <i class="fab fa-twitter"></i>
    </button>
    <div>
      <button
        v-for="button in buttons"
        v-bind:key="button.id"
        class="
          flex
          items-center
          py-2
          px-4
          hover:bg-lightblue
          hover:text-blue
          rounded-full
          mr-auto
          mb-3
        "
      >
        <i :class="`${button.icon} text-2xl mr-4 text-left`"></i>
        <p class="text-xl font-semibold text-left">{{ button.name }}</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarLeft",
  data() {
    return {
      buttons: [
        { icon: "fas fa-home", name: "Home", id: "home" },
        { icon: "fas fa-hashtag", name: "Explore", id: "explore" },
        { icon: "fas fa-bell", name: "Notifications", id: "notifications" },
        { icon: "fas fa-envelope", name: "Messages", id: "messages" },
        { icon: "fas fa-bookmark", name: "Bookmarks", id: "bookmarks" },
        { icon: "fas fa-clipboard-list", name: "Lists", id: "lists" },
        { icon: "fas fa-user", name: "User", id: "user" },
        { icon: "fas fa-ellipsis-h", name: "More", id: "more" },
      ],
    };
  },
};
</script>

<style>
</style>