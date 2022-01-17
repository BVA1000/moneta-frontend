import * as React from "react";
//import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import Link from "@mui/material/Link";
import "../../assets/fonts/fonts.css";
//import "./footer.css";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "35vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#f7f0a3",
        }}
      >
        <Container maxWidth="sm">
          <Typography textAlign="center" color="#8b8002" variant="body1">
            Moneta® LLC, Copyright All Rights Reserved 2022
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
/*import "../../assets/fonts/fonts.css";
import "./footer.css";

function Footer() {
  return (
    <div id="foot">
      <footer>
        <p>Moneta® LLC, Copyright All Rights Reserved 2021</p>
      </footer>
    </div>
  );
}

export default Footer;*/
