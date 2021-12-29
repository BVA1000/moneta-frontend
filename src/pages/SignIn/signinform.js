import Submit from "../../components/Buttons/Submit/submit";
import "../../assets/fonts/fonts.css";
import "./signin.css";

function SignInForm() {
  return (
    <div id="signinform">
      <div>
        <input placeholder="Username" type="text" required />
      </div>
      <div>
        <input placeholder="Password" type="password" required />
      </div>
      <Submit />
    </div>
  );
}

export default SignInForm;
