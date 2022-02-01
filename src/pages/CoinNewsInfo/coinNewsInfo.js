import "../../assets/fonts/fonts.css";
import "./coinNewsInfo.css";
import { Grid } from "@mui/material";

function CoinNewsInfo() {
  return (
    <div id="coinNewsInfo">
      <Grid container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2 className="big">Coin News</h2>

          <p className="big">
            Moneta encourages their users to read or write articles related to
            Numismatic News and Facts. We want this platform to appeal to our
            community of enthusiasts and collectors by having a dedicated
            section just for that in Moneta News. When you have set up your
            membership and created your account with us, you can post your own
            stories and share your knowledge with others.
          </p>

          <p className="big">
            We want to see the Numismatic community grow by giving our users
            access to valuable sources of information needed for anyone who is
            new to the hobby to those who already have knowledge but want to
            keep up to date with the current facts and breakthroughs in the
            industry. Moneta is a great place to keep up to date with the facts,
            trends, and new studies and breakthroughs in Numismatics.
          </p>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default CoinNewsInfo;
