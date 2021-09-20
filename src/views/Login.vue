<template>
  <div class="h-screen w-full flex flex-col items-center">
    <button
      class="h-16 w-16 hover:bg-lightblue text-3xl rounded-full text-blue"
    >
      <i class="fab fa-twitter"></i>
    </button>
    <form @submit.prevent="submitHandler" class="w-1/3 px-4">
      <h1 class="text-3xl font-bold my-4">Log in to Twitter</h1>
      <p class="text-sm bg-lighter">Don't have an account?</p>
      <p class="text-sm bg-lighter">
        Use this: <span class="font-semibold">email:</span> demo@demo.com,
        <span class="font-semibold">password:</span> lmnopqrst
      </p>
      <div class="flex flex-col">
        <!-- Email -->
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="email"
          required
          placeholder="Email"
          v-model="email"
        />
        <!-- Password -->
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="password"
          required
          placeholder="Password"
          v-model="password"
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
        type="submit"
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
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitHandler() {
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log(data);
      try {
        const result = await axios.post("/auth/login", data);
        console.log(result, " SUCCESS!!!!!!!");
        localStorage.setItem("token", result.data.token);
        location.reload();
      } catch (err) {
        console.log(err);
        window.alert("Please enter valid credentials");
      }
    },
  },
};
</script>

<style>
</style>