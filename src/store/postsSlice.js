import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        value: {
            id: Number,
            title: String,
            subject: String,
            author: String,
            text: String,
            image: URL,
        },
        
    },
    reducers: {
      createPost(state, action) {
          state.value = action.payload
        /*const newPost = action.payload;
        const existingPost = state.posts.find((post) => post.id === newPost.id);
        if (!existingPost) {
            state.posts.push({
              id: newPost.id,
              title: newPost.title,
              subject: newPost.subject,
              author: newPost.author,
              text: newPost.text,
              image: newPost.image,
            });
        }*/
      },
      updatePost(state, action) {
        state.value = action.payload

      },
      deletePost(state, action) {
        state.value = action.payload
      },
    },
  })
  
  // Extract the action creators object and the reducer
  //const { actions, reducer } = postsSlice
  // Extract and export each action creator by name
  export const { createPost, updatePost, deletePost } = postsSlice.actions
  // Export the reducer, either as a default or named export
  export default postsSlice.reducer