import "../../assets/fonts/fonts.css";
import uscoins from "../../assets/images/uscoins.jpg";
import "./home.css";
import { Grid } from "@mui/material";

function Home() {
  return (
    <div id="home">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h2 className="big">Welcome to Moneta!</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <p className="big">
            Moneta is a great platform for coin enthusiasts who love the study
            of numismatics and who want to connect with others who have common
            interests in this field.
          </p>

          <p className="big">
            This platform also features capabilities for our numismatists such
            as creating personal blogs, displaying coin collections, coin news,
            and selling or trading their coin collections to other collectors.
          </p>

          <p className="big">
            Have an interest in coins? Take part in this great platform by
            creating an account here.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={uscoins} className="usCoins" alt="US Coins" />
        </Grid>
        <Grid item xs={12} md={4}>
          <h3 className="big">Numismatic News</h3>

          <p className="big">
            Moneta is a great platform for coin enthusiasts who love the study
            of numismatics and who want to connect with others who have common
            interests in this field.
          </p>

          <p className="big">
            This platform also features capabilities for our numismatists such
            as creating personal blogs, displaying coin collections, coin news,
            and selling or trading their coin collections to other collectors.
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <h3 className="big">Membership</h3>

          <p className="big">
            Moneta is a great platform for coin enthusiasts who love the study
            of numismatics and who want to connect with others who have common
            interests in this field.
          </p>

          <p className="big">
            This platform also features capabilities for our numismatists such
            as creating personal blogs, displaying coin collections, coin news,
            and selling or trading their coin collections to other collectors.
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <h3 className="big">Coin Values</h3>

          <p className="big">
            Moneta is a great platform for coin enthusiasts who love the study
            of numismatics and who want to connect with others who have common
            interests in this field.
          </p>

          <p className="big">
            This platform also features capabilities for our numismatists such
            as creating personal blogs, displaying coin collections, coin news,
            and selling or trading their coin collections to other collectors.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
