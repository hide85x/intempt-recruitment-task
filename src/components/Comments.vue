<template>
  <v-card class="my-1">
    <v-card-text> people are talking .... </v-card-text>
    <v-list-item class="comment" v-for="comment in comments" :key="comment.id">
      <v-list-item-content>
        <v-card-text class="text-decoration-underline pa-0 ma-0"
          >{{ comment.email }}
        </v-card-text>
        <v-card-text class="ma-0 py-2 px-0"> says: </v-card-text>
        <v-card-text class="text-body-1 pa-2 font-weight-regular">{{ comment.body }}</v-card-text>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    idParam: {
      type: String,
      required: true,
    },
  },

  mounted() {
    this.$store.commit("getPostComments", this.idParam);
    console.log(this.idParam);
  },
  computed: {
    comments() {
      return this.$store.getters.getComments;
    },
  },
};
</script>

<style lang="scss" scoped>
.comment:nth-child(odd) {
    background: #1976d21e;
}
</style>