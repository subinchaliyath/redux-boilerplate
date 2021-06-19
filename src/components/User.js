import React from "react";
import { useDispatch } from "react-redux";

import { login } from "../redux/actions/userAction";

const User = () => {

  const dispatch = useDispatch();

  const handleUser = () => {
    dispatch(login())
  };
  
  return (
    <div>
      <button onClick={handleUser}>Fetch User</button>
    </div>
  );
};

export default User;
