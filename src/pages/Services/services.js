import "../../assets/fonts/fonts.css";
import "./services.css";
import { Grid } from "@mui/material";

function Services() {
  return (
    <div id="services">
      <Grid container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2 className="big">Our Services</h2>

          <h3 className="big">Numismatic News</h3>

          <p className="big">
            Write posts and articles about numismatic topics such as coin
            collecting, monetary history, and more so that the community can
            stay informed and educated about the subjects that matter in the
            hobby and industry.
          </p>

          <h3 className="big">Coin Values and Grading</h3>

          <p className="big">
            We also have a section where you can look up the value of your coins
            and currency based off of estimated and auctioned values from
            notable grading and auction companies such as PCGS, NGC, Stack
            Bowers, Heritage Auctions, and other experts who have in the
            business for decades.
          </p>

          <p className="big">
            We provide grading services for your coins and currency. We use
            universal standards and have skilled graders that are at a
            professional level of other grading companies such as PCGS and NGC.
            We even strive to have a hiogher level of skill and quality than our
            competitors.
          </p>

          <h3 className="big">XChange®</h3>

          <p className="big">
            Did you know that you can buy, sell, or even trade collectible coins
            and currency through our platform. That’s right, our platform called
            XChange®, is a secure way of making transactions with fellow
            numismatists such as yourself who are either interested in selling
            or buying other numismatist’s collections. You have to create a
            Moneta® Account in order to use this great perk.
          </p>

          <h3 className="big">NFT's</h3>

          <p className="big">
            In today’s world, collectors of valuable assets such as artwork and
            luxury watches have been creating NFT’s (Non Fungible Tokens) for
            authentication for these high demand collectibles. We have decided
            to be the first platform to allow the transaction of NFT’s for any
            high ticket Numismatic collectible.
          </p>

          <p className="big">
            How it works is you let us know which high end collectibles you have
            that were graded by PCGS, NGC, or by us Moneta®. Then we analyze the
            piece and our skilled developers will create an NFT that has a
            secure and unique encryption for it that cannot be duplicated, thus
            creating a strong standard of authenticity for your prized
            collectibles.
          </p>

          <p classname="big">
            What are you waiting for, go ahead and create your account now!
          </p>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default Services;
