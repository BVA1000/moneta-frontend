import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import pcgscoins from "../../../../assets/images/pcgscoins.jpg";
import "../../../../assets/fonts/fonts.css";
import "../MembershipCard/membership.css";

function MembershipCard() {
  return (
    <Card sx={{ bgcolor: "#f7f0a3" }} style={{ height: 550, width: 400 }}>
      <CardMedia>
        <img
          src={pcgscoins}
          className="pcgsCoins"
          alt="Graded Coins"
          height={200}
          width={450}
        />
      </CardMedia>
      <CardContent>
        <Typography
          sx={{ color: "#8b8002" }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Membership
        </Typography>
        <Typography
          className="membershipCard"
          sx={{ color: "#8b8002" }}
          variant="h6"
        >
          Moneta provides a great and simple variety of Memberships for our
          users. We have three types of memberships for our numismatists and
          enthusiasts (Bronze, Silver, and Gold), and each one has it's
          different perks.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#8b8002" }}>
          <Link id="link" to="/membership">
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MembershipCard;
