import SignUpForm from "./signupform";
import "../../assets/fonts/fonts.css";
import "./signup.css";
import { Grid } from "@mui/material";

function SignUp() {
  return (
    <div id="signup">
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <h1>Sign Up</h1>
          <div className="signupform">
            <SignUpForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;
