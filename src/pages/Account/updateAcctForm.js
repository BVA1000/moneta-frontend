import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Submit from "../../components/Buttons/Submit/submit";
import "../../assets/fonts/fonts.css";
import "./updateAcct.css";

function UpdateAccountForm() {
  const [acctType, setAcctType] = React.useState("");

  const handleChange = (event) => {
    setAcctType(event.target.value);
  };

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

      <FormControl
        fullWidth
        sx={{
          bgcolor: "#f7f0a3",
          borderColor: "#f7f0a3",
          borderRadius: "1.0em",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          margin: 2,
          height: 60,
          width: 420,
          justifyContent: "center",
        }}
      >
        <InputLabel sx={{ color: "#d1c96f", fontSize: 26 }}>
          Account Type
        </InputLabel>
        <Select
          id="none"
          value={acctType}
          onChange={handleChange}
          sx={{
            borderRadius: "1.0em",
            height: 60,
            width: 420,
            textAlign: "center",
          }}
        >
          <MenuItem value={1}>Bronze</MenuItem>
          <MenuItem value={2}>Silver</MenuItem>
          <MenuItem value={3}>Gold</MenuItem>
        </Select>
      </FormControl>

      <Submit />
    </div>
  );
}

export default UpdateAccountForm;
