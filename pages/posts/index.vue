<template>
    <div>
        <PostList :posts="getPosts" />
    </div>
</template>
<script>
import PostList from "@/components/post/PostList"
import { mapGetters } from 'vuex';
export default {
    components: {
        PostList,
    },

    computed: {
        ...mapGetters(['getPosts'])
    }


    /*      asyncData(context, callback) {
              setTimeout(() => {
                  callback(null, {
                      fetchedPosts: [
                          {
                              id: 1,
                              title: "Kablosuzkedi Yayında!!",
                              subTitle: "kablosuzkedi 2.sezon baslıyor..",
                              text: "kablosuzkedi 2.sezonda bizleri süprizlerle karsiliyor...",
                              author: "Gökhan Kandemir"
                          },
                          {
                              id: 2,
                              title: "videosinif.com Yayında!!",
                              subTitle: "videosinif.com güncellemelerle geri geliyor..",
                              text: "videosinif.com 2.sezonda bizleri süprizlerle karsiliyor...",
                              author: "Gökhan Kandemir"
                          },
                      ]
                  })
              }, 2000)
          }*/
}
</script>
<style scoped></style>
