import NewsCard from "../../components/Cards/NewsCard/newsCard";
import "../../assets/fonts/fonts.css";
import "./news.css";
import { Grid } from "@mui/material";

function News() {
  return (
    <div id="news">
      <Grid container spacing={4}>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2>Moneta News</h2>
        </Grid>
        <Grid item xs={0} sm={1} />

        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={5}>
          <NewsCard />
        </Grid>
        <Grid item xs={12} md={5}>
          <NewsCard />
        </Grid>
        <Grid item xs={0} sm={1} />

        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={5}>
          <NewsCard />
        </Grid>
        <Grid item xs={12} md={5}>
          <NewsCard />
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default News;
