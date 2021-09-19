<template>
  <div>
    <input
      type="text"
      class="
        rounded-full
        w-full
        p-2
        mt-2
        bg-lighter
        pl-10
        text-sm
        focus:outline-none
      "
      placeholder="Search..."
    />
    <i
      class="fas fa-search absolute left-0 top-0 mt-6 ml-12 text-sm text-light"
    ></i>

    <!-- Who to follow -->
    <div class="w-full rounded-lg bg-lightest mt-2">
      <div class="flex items-center p-3">
        <p class="text-lg font-bold">Who to follow</p>
      </div>
      <button
        v-for="people in whoToFollow"
        :key="people.name"
        class="
          w-full
          flex
          justify-between
          hover:bg-lighter
          p-2
          border-t border-lighter
        "
      >
        <div class="w-full flex justify-between align-middle px-4">
          <div class="w-full flex align-middle">
            <img
              class="rounded-full w-12 h-12 mr-2"
              v-bind:src="people.image"
            />
            <div>
              <p class="font-bold text-left leading-tight">{{ people.name }}</p>
              <p class="text-left leading-tight text-dark">
                @{{ people.handle }}
              </p>
            </div>
          </div>
          <button
            class="
              bg-black
              text-white text-sm
              w-20
              h-8
              hover:bg-dark
              rounded-full
              font-bold
            "
            @click="() => followRequest(people.id)"
          >
            Follow
          </button>
        </div>
      </button>
      <button
        class="
          p-3
          text-blue
          w-full
          hovre:bg-lighter
          text-left
          border-t border-lighter
        "
      >
        Show more
      </button>
    </div>

    <!-- Whats happening -->
    <div class="w-full rounded-lg bg-lightest mt-2">
      <div class="flex items-center p-3">
        <p class="text-lg font-bold">What's happening</p>
      </div>
      <button
        v-for="trend in trends"
        :key="trend.id"
        class="
          w-full
          flex
          justify-between
          hover:bg-lighter
          p-3
          border-t border-lighter
        "
      >
        <div>
          <p class="text-sm text-left leading-tight text-dark">
            {{ trend.top }}
          </p>
          <p class="font-bold text-left leading-tight">{{ trend.title }}</p>
          <p class="text-left leading-tight text-dark">{{ trend.bottom }}</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SidebarRight",
  data() {
    return {
      trends: [
        {
          top: "Sports",
          title: "Team India T20 world cup",
          bottom: "Trending with #T20worldcup",
        },
        {
          top: "Trending in India",
          title: "#iPhone14",
          bottom: "1,996 Tweets ",
        },
        {
          top: "Cricket",
          title: "Jay Shah",
          bottom: "Trending with #BCCI",
        },
        {
          top: "Buisiness & Finance",
          title: "Stock market",
          bottom: "2,999 Tweets",
        },
      ],
      whoToFollow: [
        {
          imageURL:
            "https://pbs.twimg.com/profile_images/1213716531462496256/sPfDM4Up_normal.jpg",
          name: "EDGE",
          username: "@_edgegroup",
        },
        {
          imageURL:
            "https://pbs.twimg.com/profile_images/1283187184028151809/L3SiFEL3_normal.jpg",
          name: "Jack Forge",
          username: "@TheJackForge",
        },
        {
          imageURL:
            "https://pbs.twimg.com/profile_images/1377353524661604356/DIMdJND1_normal.jpg",
          name: "Quincy Larson",
          username: "@ossia",
        },
      ],
    };
  },
  methods: {
    async getWhoToFollowData() {
      const peopleToFollow = await axios.get("/userData/whoToFollow");
      this.whoToFollow = peopleToFollow.data;
      console.log(peopleToFollow, "Who to follow");
    },
    async followRequest(id) {
      const data = { followingId: id };
      const userFollowed = await axios.post("/userData/follow", data);
      this.getWhoToFollowData();
      console.log(userFollowed);
    },
  },
  async created() {
    this.getWhoToFollowData();
  },
};
</script>

<style>
</style>