import "../../assets/fonts/fonts.css";
import "./membershipInfo.css";
import { Grid } from "@mui/material";

import bronze from "../../assets/images/icons/Bronze.png";
import silver from "../../assets/images/icons/Silver.png";
import gold from "../../assets/images/icons/Gold.png";


function MembershipInfo() {
  return (
    <div id="membershipInfo">
      <Grid container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2 className="big">Memberships</h2>

          <p className="big">
            Moneta provides a great and simple Membership for our users. We have
            three types of memberships (Bronze, Silver, and Gold), and each one
            has it's different perks.
          </p>
          <img id="bronze" src={bronze} className="Bronze" alt="Bronze" />
          {/*<div id="bronze">*/}
          <p className="big">
            The Bronze membership is a simple subscription that puts you on our
            weekly e-mail list that gives you access to articles published by
            Moneta with Coin News and Articles that go in depth about
            interesting topics such as monetary history, coin facts, and the
            current trends in the industry.
          </p>
          <img id="silver" src={silver} className="Silver" alt="Silver" />
          {/*</div>
          <div id="silver">*/}
          <p className="big">
            The Silver membership is a level higher than the Bronze membership.
            With this membership you also get a weekly subscription to our
            articles, but you also have the priviledge of writing your own
            articles and sharing them in Moneta News with other users. Think of
            is as a Social Media site dedicated to Coin collectors and
            enthusiasts where you can your knowledge or read up on facts and
            information that is useful and helpful for your hobby. This
            membership does have a monthly subscription fee of $4.99.
          </p>
          <img id="gold" src={gold} className="Gold" alt="Gold" />
          {/*</div>
          <div id="gold">*/}
          <p className="big">
            The Gold membership is the highest. With this membership you get the
            weekly subscription to our articles, you can write your own articles
            and post them for other users to see, and you can use our platform
            called XChange, which is an exclusive platform for our Moneta Gold
            Members where they can buy, sell, or trade their coins, currency,
            and even Coin NFT???s with other collectors and enthusiasts. If you
            want buy or sell in the Numismatic Marketplace, this is just the
            best membership option for you! For more information on XChange here
            is the link to the page. This membership does have a monthly
            subscription fee of $7.99.
          </p>
          {/*</div>*/}
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default MembershipInfo;
