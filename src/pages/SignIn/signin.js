import SignInForm from "./signinform";
import "../../assets/fonts/fonts.css";
import "./signin.css";
import { Grid } from "@mui/material";

function SignIn() {
  return (
    <div id="signin">
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <h1>Sign In</h1>
          <div className="signinform">
            <SignInForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIn;
