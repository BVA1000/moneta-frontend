import Submit from '../../components/Buttons/Submit/submit';
import { Link } from 'react-router-dom';
import '../../assets/fonts/fonts.css';
import './signup.css';

//import { useDispatch } from "react-redux";
//import { createAccount } from "../../../store/accountSlice";

function SignUpForm(fullname, email, username, password) {
  //const dispatch = useDispatch()
  //this.fullname = fullname;
  //this.email = email;
  //this.username = username;
  //this.password = password;

  return (
    <div id="signupform">
      <div>
        <input id="fullname" placeholder="Full Name" type="text" required>
          {/* fullname */}
        </input>
      </div>
      <div>
        <input id="email" placeholder="Email" type="text" required>
          {/* email */}
        </input>
      </div>
      <div>
        <input id="username" placeholder="Username" type="text" required>
          {/* username */}
        </input>
      </div>
      <div>
        <input id="password" placeholder="Password" type="password" required>
          {/* password */}
        </input>
      </div>
      <div>
        <input placeholder="Account Type" type="text" required />
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

/*
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


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
      </FormControl>*/
