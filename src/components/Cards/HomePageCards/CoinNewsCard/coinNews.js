import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import colonialcurrency from "../../../../assets/images/colonialcurrency.jpg";
import "../CoinNewsCard/coinNews.css";

function CoinNewsCard() {
  return (
    <Card sx={{ bgcolor: "#f7f0a3" }} style={{ height: 550, width: 400 }}>
      <CardMedia>
        <img
          src={colonialcurrency}
          className="colonialCurrency"
          alt="Colonial Currency"
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
          Coin News
        </Typography>
        <Typography className="newsCard" sx={{ color: "#8b8002" }} variant="h6">
          Moneta encourages their users to read or write articles related to
          Numismatic News and Facts. We want this platform to appeal to our
          community of enthusiasts and collectors by having a dedicated section
          just for that.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#8b8002" }}>
          <Link id="link" to="/coinnews">
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CoinNewsCard;
