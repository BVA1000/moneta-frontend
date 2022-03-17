import ListingsCard from "../../components/Cards/ListingsCard/listingsCard.js";
import "../../assets/fonts/fonts.css";
import "./listings.css";
import { Grid } from "@mui/material";

function Listings() {
  return (
    <div id="listings">
      <Grid container spacing={4}>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2>XChange Listings</h2>
        </Grid>
        <Grid item xs={0} sm={1} />

        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={5}>
          <ListingsCard />
        </Grid>
        <Grid item xs={12} md={5}>
          <ListingsCard />
        </Grid>
        <Grid item xs={0} sm={1} />

        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={5}>
          <ListingsCard />
        </Grid>
        <Grid item xs={12} md={5}>
          <ListingsCard />
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default Listings;
