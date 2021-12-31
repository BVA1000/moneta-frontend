import UpdateAccountForm from "./updateAcctForm";
import "../../assets/fonts/fonts.css";
import "./updateAcct.css";

function UpdateAccount() {
  return (
    <div id="updateAcct">
      <h2>Update Account</h2>
      <div className="updateAcctForm">
        <UpdateAccountForm />
      </div>
    </div>
  );
}

export default UpdateAccount;
