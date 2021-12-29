import SignUpForm from "./signupform";
import "../../assets/fonts/fonts.css";
import "./signup.css";

function SignUp() {
  return (
    <div id="signup">
      <h1>Sign Up</h1>
      <div className="signupform">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
