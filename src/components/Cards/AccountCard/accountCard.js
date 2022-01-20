import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
//import TextField from "@mui/material/TextField";
//import TextareaAutosize from "@mui/material/TextareaAutosize";
import "../../../assets/fonts/fonts.css";
import profilepic from "../../../assets/images/bva.jpg";
//import "./postCard.css";
import Update from "../../Buttons/Update/update";
import Create from "../../Buttons/Create/create";
import Edit from "../../Buttons/Edit/edit";
import "./accountCard.css";
import "../../../assets/fonts/fonts.css";

function AccountCard() {
  return (
    <div id="accountCard">
      <Container
        maxWidth="lg"
        sx={{
          borderRadius: 10,
          bgcolor: "#f7f0a3",
          padding: 5,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} md={10}>
            <Typography variant="h2">Account Info</Typography>
          </Grid>
          <Grid item xs={0} sm={1} />

          <Grid item xs={0} sm={0.5} />
          <Grid item xs={12} md={7.5}>
            <Typography variant="h4">Full Name: Ben Von Achen</Typography>
            <Typography variant="h4">User Name: BVA1000</Typography>
            <Typography variant="h4">Email: benvonachen@bva.com</Typography>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Box sx={{ justifyContent: "center" }}>
              <img
                src={profilepic}
                className="profilePic"
                alt="Profile Picture"
                style={{ width: 250, height: 250 }}
              />
            </Box>
          </Grid>
          <Grid item xs={0} sm={0.5} />

          <Grid item xs={0} sm={1.005} />
          <Grid
            item
            xs={12}
            md={3.33}
            spacing={2}
            style={{ justifyContent: "center" }}
          >
            <Update />
          </Grid>

          <Grid
            item
            xs={12}
            md={3.33}
            spacing={2}
            style={{ justifyContent: "center" }}
          >
            <Create />
          </Grid>

          <Grid
            item
            xs={12}
            md={3.33}
            spacing={2}
            style={{ justifyContent: "center" }}
          >
            <Edit />
          </Grid>
          <Grid item xs={0} sm={1.005} />
        </Grid>
      </Container>
    </div>
  );
}

export default AccountCard;

/*import Update from "../../Buttons/Update/update";
import Create from "../../Buttons/Create/create";
import Edit from "../../Buttons/Edit/edit";
import "./accountCard.css";

function AccountCard() {
  return (
    <div id="accountCard">
      <div className="acctCard">
        <h2>Account Info</h2>
        <p>Full Name: Ben Von Achen</p>
        <p>User Name: BVA1000</p>
        <p>Email: benvonachen@bva.com</p>
        <br />
        <div id="btn-group">
          <Update />
          <Create />
          <Edit />
        </div>
      </div>
    </div>
  );
}

export default AccountCard;*/
