import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import circulatedcoins from "../../../../assets/images/circuscoins.jpg";
import "../CoinValuesCard/coinValues.css";

function CoinValuesCard() {
  return (
    <Card sx={{ bgcolor: "#f7f0a3" }} style={{ height: 550, width: 400 }}>
      <CardMedia>
        <img
          src={circulatedcoins}
          className="circulatedCoins"
          alt="Circulated Coins"
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
          Coin Values
        </Typography>
        <Typography
          className="valuesCard"
          sx={{ color: "#8b8002" }}
          variant="h6"
        >
          Moneta also has information about coin values, where numismatists and
          enthusiasts can check the current values and other information for
          their coins. From Ancient to US Coins, we have all of the information
          you need to keep up.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#8b8002" }}>
          <Link id="link" to="/coinvalues">
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CoinValuesCard;
