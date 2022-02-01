import "../../assets/fonts/fonts.css";
import CoinNewsCard from "../../components/Cards/HomePageCards/CoinNewsCard/coinNews";
import CoinValuesCard from "../../components/Cards/HomePageCards/CoinValuesCard/coinValues";
import MembershipCard from "../../components/Cards/HomePageCards/MembershipCard/membership";

import uscoins from "../../assets/images/uscoins.jpg";
import "./home.css";
import { Grid } from "@mui/material";

function Home() {
  return (
    <div id="home">
      <Grid container spacing={2}>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2 className="big">Welcome to Moneta!</h2>
        </Grid>
        <Grid item xs={0} sm={1} />

        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={5}>
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

        <Grid item xs={12} md={5}>
          <img src={uscoins} className="usCoins" alt="US Coins" />
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
      <br />
      <Grid container spacing={12}>
        <Grid item xs={0} md={1.005} />
        <Grid item xs={12} md={3.33}>
          <CoinNewsCard />
        </Grid>

        <Grid item xs={12} md={3.33}>
          <CoinValuesCard />
        </Grid>

        <Grid item xs={12} md={3.33}>
          <MembershipCard />
        </Grid>
        <Grid item xs={0} md={1.005} />
      </Grid>
    </div>
  );
}

export default Home;
