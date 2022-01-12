import "../../assets/fonts/fonts.css";
import "./about.css";
import { Grid } from "@mui/material";

function About() {
  return (
    <div id="about">
      <Grid container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2 className="big">About Moneta</h2>

          <p className="big">
            The word Moneta stands for “Coin” in several languages like Italian
            and Russian. Moneta was created by Ben Von Achen, who from childhood
            took interest in Numismatics, which is the study of coins and
            currency.
          </p>

          <p className="big">
            Ben worked in the industry buying and selling precious metals and
            collectible coins and currency. It was through his past experience
            where he was inspired to create this exclusive platform for coin
            enthusiasts, who take interest in numismatics.
          </p>

          <p className="big">
            If you want to blog, post, buy or sell coins, this is the platform
            for you! What are you waiting for? Create your account here.
          </p>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default About;
