import Submit from "../../components/Buttons/Submit/submit";
import "../../assets/fonts/fonts.css";
import "./updateAcct.css";

function UpdateAccountForm() {
  return (
    <div id="updateAcctForm">
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
      <Submit />
    </div>
  );
}

export default UpdateAccountForm;
