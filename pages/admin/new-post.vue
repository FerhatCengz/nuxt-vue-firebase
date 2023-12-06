<template>
  <PostForm @submit="savePost($event)" />
</template>
<script>
import PostForm from "@/components/admin/PostForm"
import axios from "axios";

export default {
  components: {
    PostForm
  },
  methods: {

    async savePost(post) {
      this.$store.dispatch("addPost", post).then((result) => {
        this.$router.push("/admin");
      });
      // var response = await axios.post("https://kose-yaz-3679a-default-rtdb.firebaseio.com/posts.json", post);
      // console.log(response);
      // this.$router.push("/admin");
    }
  },
}
</script>


