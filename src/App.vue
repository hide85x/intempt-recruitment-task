<template>
  <v-app>
    <Nav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts
    }
  },
  mounted() {
    if(!this.posts.length){
      this.$store.dispatch("collectPosts");
    }
  },
};
</script>
<style lang="scss" scoped>
</style>