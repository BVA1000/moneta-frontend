import UpdateAccountForm from "./updateAcctForm";
import "../../assets/fonts/fonts.css";
import "./updateAcct.css";

function UpdateAccount() {
  return (
    <div id="updateAcct">
      <h1>Update Account</h1>
      <div className="updateAcctForm">
        <UpdateAccountForm />
      </div>
    </div>
  );
}

export default UpdateAccount;
