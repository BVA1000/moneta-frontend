import '../../assets/fonts/fonts.css';
import './xchange.css';
import Browse from '../../components/Buttons/Browse/browse';
import uscoins2 from '../../assets/images/uscoins2.jpg';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function XChange() {
  return (
    <div id="xchange">
      <Grid container spacing={2}>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <h2 className="big">Welcome to XChange®</h2>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
      <Grid justifyContent="center" container spacing={4}>
        <Grid item sm={0} md={0} lg={1} />
        <Grid item sm={12} md={12} lg={5}>
          <img
            id="uscoins2"
            src={uscoins2}
            className="usCoins2"
            alt="US Coins 2"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <p className="big">
            Xchange is an exclusive platform for our Moneta Gold Members where
            they can buy, sell, or trade their coins, currency, and even Coin
            NFT’s with other collectors and enthusiasts. If you want buy or sell
            in the Numismatic Marketplace, this is just the platform for you!
            What are you waiting for? Start browsing!
          </p>
        </Grid>
        <Grid item sm={0} md={0} lg={1} />

        <Grid item xs={0} sm={1} />
        <Grid item xs={12} md={10}>
          <div className="xchange">
            <Link to="/listings">
              <Browse />
            </Link>
          </div>
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </div>
  );
}

export default XChange;
