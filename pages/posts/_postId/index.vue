<template>
    <PostDetail :post="fetchedPost" />
</template>
<script>
import PostDetail from "@/components/post/PostDetail"
import axios from 'axios';

export default {

    components: {
        PostDetail
    },
    // this.$route.params._postId
    // asyncData(context, callback) {
    //     setTimeout(() => {
    //         callback(null, {
    //             fetchedPost: {
    //                 id: "1",
    //                 title: "kablosuzkedi Geliyor.. ID bilgisi de budur (" + context.params.postId + ")",
    //                 subTitle: "kablosuzkedi yeni sezona bomba gibi geliyor...",
    //                 text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consequuntur, corporis debitis dolorem esse est eum exercitationem in iure libero necessitatibus nobis nulla qui quis quod, ratione reiciendis repellat!",
    //                 author: "Gökhan Kandemir"
    //             }
    //         })
    //     }, 1500)
    // }

    async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
        const [request, request2] = await Promise.all([
            await axios.get(`https://kose-yaz-3679a-default-rtdb.firebaseio.com/posts/${route.params.postId}.json`),
            await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        ]);

        return {
            fetchedPost: request.data,
            request2: request2.data,
        }
    },

}
</script>
