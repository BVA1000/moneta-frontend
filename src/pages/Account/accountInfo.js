import AccountCard from "../../components/Cards/AccountCard/accountCard";
import Grid from "@mui/material/Grid";
import "../../assets/fonts/fonts.css";
import "./accountInfo.css";

function AccountInfo() {
  return (
    <div id="accountInfo">
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <h1>Hello!</h1>
        </Grid>
        <Grid item xs={12} md={12}>
          <AccountCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default AccountInfo;
