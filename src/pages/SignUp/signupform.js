import Submit from "../../components/Buttons/Submit/submit";
import { Link } from "react-router-dom";
import "../../assets/fonts/fonts.css";
import "./signup.css";

//import { useDispatch } from "react-redux";
//import { createAccount } from "../../../store/accountSlice";

function SignUpForm() {

  //const dispatch = useDispatch()

  return (
    <div id="signupform">
      <div>
        <input id="fullname" placeholder="Full Name" type="text" required />
      </div>
      <div>
        <input id="email" placeholder="Email" type="text" required />
      </div>
      <div>
        <input id="username" placeholder="Username" type="text" required />
      </div>
      <div>
        <input id="password" placeholder="Password" type="password" required />
      </div>
      <Link to="/account">
        <Submit 
        /*onClick={() => {
                dispatch(createAccount({}));
              }}*/
        />
      </Link>
    </div>
  );
}

export default SignUpForm;
