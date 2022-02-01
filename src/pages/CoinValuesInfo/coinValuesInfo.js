import "../../assets/fonts/fonts.css";
import "./coinValuesInfo.css";
import { Grid } from "@mui/material";

function CoinValuesInfo() {
  return (
    <div id="coinValuesInfo">
      <Grid container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2 className="big">Coin Values</h2>

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
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default CoinValuesInfo;
