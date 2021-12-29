import SignInForm from "./signinform";
import "../../assets/fonts/fonts.css";
import "./signin.css";

function SignIn() {
  return (
    <div id="signin">
      <h1>Sign In</h1>
      <div className="signinform">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
