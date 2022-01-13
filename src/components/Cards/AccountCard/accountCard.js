import Update from "../../Buttons/Update/update";
import Create from "../../Buttons/Create/create";
import Edit from "../../Buttons/Edit/edit";
import "./accountCard.css";

function AccountCard() {
  return (
    <div id="accountCard">
      <div className="acctCard">
        <h2>Account Info</h2>
        <p>Full Name: Ben Von Achen</p>
        <p>User Name: BVA1000</p>
        <p>Email: benvonachen@bva.com</p>
        <br />
        <div id="btn-group">
          <Update />
          <Create />
          <Edit />
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
