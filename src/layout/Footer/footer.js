import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../../assets/fonts/fonts.css";

function Footer() {
  return (
    <div id="foot">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "40vh",
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
    </div>
  );
}

export default Footer;
