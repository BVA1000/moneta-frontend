import Submit from "../../components/Buttons/Submit/submit";
import { Link } from "react-router-dom";
import "../../assets/fonts/fonts.css";
import "./signup.css";

function SignUpForm() {
  return (
    <div id="signupform">
      <div>
        <input placeholder="Full Name" type="text" required />
      </div>
      <div>
        <input placeholder="Email" type="text" required />
      </div>
      <div>
        <input placeholder="Username" type="text" required />
      </div>
      <div>
        <input placeholder="Password" type="password" required />
      </div>
      <Link to="/account">
        <Submit />
      </Link>
    </div>
  );
}

export default SignUpForm;
