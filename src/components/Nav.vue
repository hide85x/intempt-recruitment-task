<template>
  <v-app-bar app color="primary" dark d-flex justify-space-around>
    <div class="d-flex align-center">
      powered by

      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>
    <router-link class="router-links" to="/">all the posts</router-link>
    <router-link class="router-links" to="/create-post">create new post</router-link>
    <router-link class="router-links" to="/about"> about</router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.router-links {
  text-decoration: none;
  margin-left: 20px;
  color: white;
}
.router-link-exact-active {
  text-decoration: underline;
}
</style>