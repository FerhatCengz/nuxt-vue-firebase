<template>
  <section>
    <PostForm :is-update="true" :postData="loadedPost" @submit="updatePost($event)" />
  </section>
</template>
<script>
import PostForm from "@/components/admin/PostForm"
import axios from 'axios'

export default {
  components: {
    PostForm
  },

  data() {
    return {
      /* {
        id: 1,
        title: "Veri gelecek. title",
        subTitle: "Veri gelecek. subTitle",
        text: "Veri gelecek. text",
        author: "Ferhat Cengiz",
      }*/
    }
  },

  ///Alternatif
  async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    var response = await axios.get(`https://kose-yaz-3679a-default-rtdb.firebaseio.com/posts/${route.params.postId}.json`);
    return {
      loadedPost: response.data
    }
  },


  methods: {
    async updatePost(editedPost) {
      this.$store.dispatch("updatePost", { ...editedPost, id: this.$route.params.postId }).then(() => this.$router.push("/admin"));
    }
  },


  //! Alternatif olarak firebase'e istek atılıp oradan da çekilebilir.
  // created() {
  //   this.$store.getters.getPosts.map(data => {
  //     if (data.id == this.$route.params.postId) {
  //       this.loadedPost = data;
  //     }
  //     else {
  //       return new Error("ID Bulunamadı");
  //     }
  //   })
  // },


}



</script>
