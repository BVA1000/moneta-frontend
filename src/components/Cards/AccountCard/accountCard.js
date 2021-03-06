import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../../../assets/fonts/fonts.css";
import profilepic from "../../../assets/images/bva.jpg";
import Update from "../../Buttons/Update/update";
import Create from "../../Buttons/Create/create";
import Edit from "../../Buttons/Edit/edit";
import { Link } from "react-router-dom";
import "./accountCard.css";
import "../../../assets/fonts/fonts.css";

//import { useSelector } from "react-redux";

function AccountCard() {
  //const account = useSelector((state) => state.account.value);

  return (
    <div id="accountCard">
      <Container
        maxWidth="lg"
        sx={{
          borderRadius: 10,
          bgcolor: "#f7f0a3",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: 5,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} md={10}>
            <Typography variant="h2">Account Info</Typography>
          </Grid>
          <Grid item xs={0} sm={1} />

          <Grid item xs={0} sm={1} />
          <Grid item xs={12} md={4.5}>
            <Box sx={{ justifyContent: "center" }}>
              <img src={profilepic} className="profilePic" alt="Profile" />
              {/* image */}
            </Box>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Typography
              className="big"
              variant="h4"
              sx={{
                color: "#8b8002",
                fontSize: 30,
              }}
            >
              Full Name: Ben Von Achen {/* fullname */}
            </Typography>
            <Typography
              className="big"
              variant="h4"
              sx={{
                color: "#8b8002",
                fontSize: 30,
              }}
            >
              User Name: BVA1000 {/* username */}
            </Typography>
            <Typography
              className="big"
              variant="h4"
              sx={{
                color: "#8b8002",
                fontSize: 30,
              }}
            >
              Email: benvonachen@bva.com {/* email */}
            </Typography>
            <Typography
              className="big"
              variant="h4"
              sx={{
                color: "#8b8002",
                fontSize: 30,
              }}
            >
              Account Type: Gold {/* account type */}
            </Typography>
          </Grid>
          <Grid item xs={0} sm={1} />

          <Grid item xs={0} sm={1.005} />
          <Grid item xs={12} md={3.33} style={{ justifyContent: "center" }}>
            <Link to="/update">
              <Update />
            </Link>
          </Grid>

          <Grid item xs={12} md={3.33} style={{ justifyContent: "center" }}>
            <Link to="/createpost">
              <Create />
            </Link>
          </Grid>

          <Grid item xs={12} md={3.33} style={{ justifyContent: "center" }}>
            <Edit />
          </Grid>
          <Grid item xs={0} sm={1.005} />
        </Grid>
      </Container>
    </div>
  );
}

export default AccountCard;
