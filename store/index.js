import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      },

      addPost(state, post) {
        state.fetchedPosts.push(post);
      },

      updatePost(state, editedPost) {
        //her bir elamanı döndürür. ve verilen şartı sağladığında o indexi sana verir.
        let postIndex = state.fetchedPosts.findIndex(
          (post) => post.id == editedPost.id
        );

        if (postIndex) {
          state.fetchedPosts[postIndex] = editedPost;
        }
      },
    },
    actions: {
      addPost({ commit }, post) {
        var response = axios
          .post(
            "https://kose-yaz-3679a-default-rtdb.firebaseio.com/posts.json",
            post
          )
          .then((response) => {
            commit("addPost", { ...post, id: response.data.name });
          });
      },

      updatePost({ commit }, editedPost) {
        return axios
          .put(
            `https://kose-yaz-3679a-default-rtdb.firebaseio.com/posts/${editedPost.id}.json`,
            editedPost
          )
          .then((e) => {
            commit("updatePost", editedPost);
          });
      },

      async nuxtServerInit(vuexContext, context) {
        // serverde mi yoksa client üzerinde mi çalıştığımızı kontrol et
        if (!process.client /* false ise server üzerindedir */) {
          console.log("Server üzerinden!");
        }

        return axios
          .get("https://kose-yaz-3679a-default-rtdb.firebaseio.com/posts.json")
          .then((response) => {
            // response.data içindeki her öğeyi { id: key, ...data[key] } formatında bir nesne haline getir
            const postArray = Object.keys(response.data).map((key) => ({
              id: key,
              ...response.data[key],
            }));

            // Vuex store'a gönder
            vuexContext.commit("setPosts", postArray);
          });
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      getPosts(state) {
        return state.fetchedPosts;
      },
    },
  });
};

export default createStore;
