<template>
  <v-container>
    <h2 class="mb-10">Create new post</h2>
    <v-card class="pa-5">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="title"
          :counter="20"
          :rules="requiredRule"
          label="title"
          required
        ></v-text-field>

       <v-textarea
          v-model="body"
          class="ma-4"
          value="asdasd"
          label="body"
        >
        </v-textarea>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4 mt-4"
          @click="createPost"
        >
          Create post
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    title: "",
    body: "",
    requiredRule: [(v) => !!v || "This field is required"],
  }),

  methods: {
    createPost() {
      this.validate();
      console.log(this.valid)
      if (this.valid) {
        const payload = {
          id: Math.floor(Math.random() * 9999999999) + 9878971,
          title: this.title,
          body: this.body,
        };
        this.$store.commit("addPost", payload);
        this.$router.push("/");
      }
    },
    validate() {
     this.valid = this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>