<template>
  <div>
    <div class="px-5 py-3 border-b border-lighter flex items-center">
      <h1 class="text-lg font-bold">Home</h1>
    </div>
    <div class="px-5 py-3 border-b border-lighter flex">
      <div>
        <img
          :src="profileData.image"
          alt="profile"
          class="w-12 h-12 rounded-full border border-lighter object-cover"
        />
      </div>
      <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
        <textarea
          v-model="myTweet"
          required
          placeholder="What's happening?"
          class="w-full focus:outline-none mt-3"
        ></textarea>
        <div class="flex items-center">
          <i class="text-lg text-blue mr-4 fas fa-image"></i>
          <i class="text-lg text-blue mr-4 fas fa-chart-line"></i>
          <i class="text-lg text-blue mr-4 fas fa-chart-bar"></i>
          <i class="text-lg text-blue mr-4 fas fa-smile"></i>
          <i class="text-lg text-blue mr-4 fas fa-tasks"></i>
        </div>
        <button
          class="
            h-10
            px-4
            text-white
            font-semibold
            bg-blue
            hover:bg-darkblue
            focus:outline-none
            rounded-full
            absolute
            bottom-0
            right-0
          "
        >
          Tweet
        </button>
      </form>
    </div>
    <div
      v-for="tweet in tweets"
      :key="tweet.id"
      class="w-full p-4 border-b hover:bg-lighter"
    >
      <Tweet :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Tweet from "./Tweet.vue";
export default {
  name: "MainSection",
  props: ["profileData"],
  components: {
    Tweet,
  },
  data() {
    return {
      tweets: [
        {
          src: "https://pbs.twimg.com/profile_images/1423663740344406029/l_-QOIHY_400x400.jpg",
          name: "Elon Musk",
          handle: "@elonmusk",
          tweet: "Should I just quarantine on mars??",
          id: 1,
        },
        {
          src: "https://pbs.twimg.com/profile_images/856983737426423809/6jebtwP-_400x400.jpg",
          name: "Brad Traversy",
          handle: "@traversymedia",
          tweet: "There is no such thing as a “best programming language”",
          id: 2,
        },
        {
          src: "https://pbs.twimg.com/profile_images/1409137609729789962/fUE4aWNf_400x400.jpg",
          name: "Florin Pop ",
          handle: "@florinpop1705",
          tweet:
            "You can drastically change your life by changing your mindset.",
          id: 3,
        },
      ],
      myTweet: "",
    };
  },
  methods: {
    async addNewTweet() {
      console.log(this.myTweet);
      if (this.myTweet == "") {
        return;
      }

      // sending the tweet to database
      const myTweets = await axios.post("/userData/tweet", {
        tweet: this.myTweet,
      });
      console.log(myTweets.data, "My tweets");
      this.getTweets();
    },
    async getTweets() {
      const allTweets = await axios.get("/userData/tweets");
      console.log(allTweets, "My tweets");
      this.tweets = allTweets.data;
    },
  },
  created() {
    this.getTweets();
    console.log(this.profileData);
  },
};
</script>

<style>
</style>