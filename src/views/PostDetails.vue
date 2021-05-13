<template>
  <v-container>
    <h2 class="mb-10">Post deatils</h2>
    <v-card v-if="post">
      <v-card-title primary-title> {{ post.title }} </v-card-title>
      <v-card-text> {{ post.body }} </v-card-text>
      <v-col v-if="editMode">
        <v-textarea
          v-model="updatedTitle"
          rows="1"
          row-height="15"
          class="ma-4"
          label="update title"
        >
        </v-textarea>
        <v-textarea
          v-model="updatedBody"
          class="ma-4"
          value="asdasd"
          label="update body"
        >
        </v-textarea>
        <v-btn class="mb-16 ml-4" color="success" @click="updatePost"
          >save</v-btn
        >
        <v-btn class="mb-16 ml-4" color="" @click="cancel">close</v-btn>
      </v-col>
      <v-card-actions>
        <v-btn class="ml-2" color="primary" @click="edit">edit</v-btn>
        <v-btn color="error" @click="deletePost">delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PostDetails",
  data() {
    return {
      idParam: this.$route.params.id,
      editMode: false,
      updatedTitle: "",
      updatedBody: "",
    };
  },
  methods: {
    cancel() {
      this.editMode = false;
    },
    edit() {
      this.editMode = !this.editMode;
    },
    updatePost() {
      const payload = {
        postId: this.idParam,
        updatedTitle: this.updatedTitle,
        updatedBody: this.updatedBody,
      };
      this.$store.commit("updatePost", payload);
    },
    deletePost() {
      console.log(this.idParam);
      this.$store.commit("deletePost", { postId: this.idParam });
      this.$router.push("/");
    },
  },
  mounted() {
    const post = this.$store.getters.getOnePost(this.idParam);
    
    this.updatedTitle = post.title;
    this.updatedBody = post.body;
  },
  computed: {
    post() {
      return this.$store.getters.getOnePost(this.idParam);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>