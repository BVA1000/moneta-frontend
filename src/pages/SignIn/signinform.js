import Submit from "../../components/Buttons/Submit/submit";
import { Link } from "react-router-dom";
import "../../assets/fonts/fonts.css";
import "./signin.css";

function SignInForm() {
  return (
    <div id="signinform">
      <form>
        <div>
          <input placeholder="Username" type="text" required />
        </div>
        <div>
          <input placeholder="Password" type="password" required />
        </div>
        <Link to="/account">
          <Submit />
        </Link>
      </form>
    </div>
  );
}

export default SignInForm;
