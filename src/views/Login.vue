<template>
  <div class="h-screen w-full flex flex-col items-center">
    <form class="w-1/3 px-4">
      <button
        class="h-16 w-16 hover:bg-lightblue text-3xl rounded-full text-blue"
      >
        <i class="fab fa-twitter"></i>
      </button>
      <h1 class="text-3xl font-bold my-4">Log in to Twitter</h1>
      <div class="flex flex-col">
        <input
          class="border border-gray-400 my-4 p-3 text-grey-darkest rounded"
          type="text"
          required
          placeholder="Name"
        />
        <input
          class="border border-gray-400 my-4 p-3 text-grey-darkest rounded"
          type="password"
          required
          placeholder="Password"
        />
      </div>
      <button
        class="
          bg-blue
          w-full
          h-14
          my-2
          rounded-2xl
          text-xl text-white
          font-bold
        "
      >
        Login
      </button>
    </form>
    <div class="w-1/3 px-4">
      <router-link to="/signup">
        <button class="bg-gray-300 w-full h-14 rounded-2xl text-xl font-bold">
          Signup
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>