<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
    </div>
    <PostList :posts="getPosts" :is-admin="true" />


  </div>
</template>
<script>
import PostList from "@/components/post/PostList"
import { mapGetters } from 'vuex';
export default {
  layout: "admin",
  components: {
    PostList,
  },

  computed: {
    ...mapGetters(['getPosts'])
  }
}
</script>
<style scoped></style>
