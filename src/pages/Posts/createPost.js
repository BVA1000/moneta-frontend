import CreatePostCard from "../../components/Cards/PostsCard/postCard";
import Grid from "@mui/material/Grid";
import "../../assets/fonts/fonts.css";
import "./createPost.css";

function CreatePost() {
  return (
    <div id="createPost">
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <h1>Create Post</h1>
        </Grid>
        <Grid item xs={12} md={12}>
          <CreatePostCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default CreatePost;
