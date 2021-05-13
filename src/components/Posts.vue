<template>
  <v-container>
    <h1 class="mb-10">All the Posts</h1>

    <v-card class="mb-4 elevation-7" v-for="post in posts" :key="post.id">
      <v-card-title primary-title>
        {{ post.title }}
      </v-card-title>
      <v-card-text>
        {{ post.body }}
      </v-card-text>
      <v-card-actions>
        <router-link :to="'/posts/' + post.id" style="text-decoration: none">
          <v-btn outlined rounded color="primary">
            get details
          </v-btn></router-link
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import posts from "../store/posts";
export default {
  name: "Posts",

  data: () => ({}),
  methods: {},
  mounted() {},
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>
