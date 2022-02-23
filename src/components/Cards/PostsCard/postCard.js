import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import Back from "../../Buttons/Back/back";
import SubmitPost from "../../Buttons/Submit/submitpost";
import "../../../assets/fonts/fonts.css";

import { Link } from "react-router-dom";
import "./postCard.css";

//import { useDispatch } from "react-redux";
//import { createPost } from "../../../store/postsSlice";

function CreatePostCard() {
  //const dispatch = useDispatch()

  return (
    <div id="createPostsCard">
      <Container
        maxWidth="md"
        sx={{
          borderRadius: 10,
          bgcolor: "#f7f0a3",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: 4,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={0} sm={1.5} />
          <Grid item xs={12} md={9}>
            <TextField
              id="title"
              name="title"
              label="Title"
              fullWidth
              variant="standard"
              sx={{ color: "#8b8002" }}
            ></TextField>
          </Grid>
          <Grid item xs={0} sm={1.5} />

          <Grid item xs={0} sm={1.5} />
          <Grid item xs={12} md={4.5}>
            <TextField
              id="subject"
              name="subject"
              label="Subject"
              fullWidth
              variant="standard"
              sx={{ color: "#8b8002" }}
            ></TextField>
          </Grid>

          <Grid item xs={12} md={4.5}>
            <TextField
              id="author"
              name="author"
              label="Author"
              fullWidth
              variant="standard"
              sx={{ color: "#8b8002" }}
            ></TextField>
          </Grid>
          <Grid item xs={0} sm={1.5} />

          <Grid item xs={0} sm={1.5} />
          <Grid item xs={12} md={9}>
            <TextField
              id="imageUrl"
              name="imageurl"
              label="Image URL"
              fullWidth
              variant="standard"
              sx={{ color: "#8b8002" }}
            ></TextField>
          </Grid>
          <Grid item xs={0} sm={1.5} />

          <Grid item xs={0} sm={1.5} />
          <Grid item xs={12} md={9}>
            <textarea
              placeholder="Place text here"
              className="textBox"
              id="textbox"
            />
          </Grid>

          <Grid item xs={0} sm={1.5} />

          <Grid item xs={0} sm={1.5} md={3} />

          <Grid
            item
            xs={12}
            sm={4.5}
            md={3}
            spacing={2}
            style={{ justifyContent: "center" }}
          >
            <SubmitPost
            /*onClick={() => {
                dispatch(createPost({}));
              }}*/
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={4.5}
            md={3}
            spacing={2}
            style={{ justifyContent: "center" }}
          >
            <Link to="/account">
              <Back />
            </Link>
          </Grid>

          <Grid item xs={0} sm={1.5} md={3} />
        </Grid>
      </Container>
    </div>
  );
}

export default CreatePostCard;

/*import BackToAccountButton from "../../Buttons/Account/backtoacct";
import SubmitPost from "../../Buttons/Submit/submitpost";
import "./postCard.css";

function CreatePostCard() {
  return (
    <div id="createPostsCard">
      <form className="postCard">
        <div id="postInputs">
          <div>
            <input type="text" placeholder="Title" required />
          </div>
          <div>
            <input type="text" placeholder="Subject" required />
          </div>
          <div>
            <input type="text" placeholder="Author" required />
          </div>
        </div>
        <div>
          <textarea type="text" placeholder="Text Box" required />
        </div>
        <div id="btn-group">
          <SubmitPost />
          <BackToAccountButton />
        </div>
      </form>
    </div>
  );
}

export default CreatePostCard;*/
