import "../../assets/fonts/fonts.css";
import Typography from "@mui/material/Typography";
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

        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={5}>
          <h3 className="big">Coin News</h3>

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
        <Grid item xs={12} md={5}>
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
        <Grid item xs={0} sm={1} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h3 className="big">Memberships</h3>

          <p className="big">
            Moneta provides a great and simple Membership for our users. We have
            three types of memberships (Bronze, Silver, and Gold), and each one
            has it's different perks.
          </p>

          <div id="bronze">
            <p className="big">
              The Bronze membership is a simple subscription that puts you on
              our weekly e-mail list that gives you access to articles published
              by Moneta with Coin News and Articles that go in depth about
              interesting topics such as monetary history, coin facts, and the
              current trends in the industry.
            </p>
          </div>
          <div id="silver">
            <p className="big">
              The Silver membership is a level higher than the Bronze
              membership. With this membership you also get a weekly
              subscription to our articles, but you also have the priviledge of
              writing your own articles and sharing them in Moneta News with
              other users. Think of is as a Social Media site dedicated to Coin
              collectors and enthusiasts where you can your knowledge or read up
              on facts and information that is useful and helpful for your
              hobby. This membership does have a monthly subscription fee of
              $4.99.
            </p>
          </div>
          <div id="gold">
            <p className="big">
              The Gold membership is the highest. With this membership you get
              the weekly subscription to our articles, you can write your own
              articles and post them for other users to see, and you can use our
              platform called XChange, which is an exclusive platform for our
              Moneta Gold Members where they can buy, sell, or trade their
              coins, currency, and even Coin NFT’s with other collectors and
              enthusiasts. If you want buy or sell in the Numismatic
              Marketplace, this is just the best membership option for you! For
              more information on XChange here is the link to the page. This
              membership does have a monthly subscription fee of $7.99.
            </p>
          </div>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default Home;
