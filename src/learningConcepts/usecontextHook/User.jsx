import React, { useContext } from "react";
import Details from "./Details";
import UserContext from "../../context/UserContext";

const User = () => {
    // creating consumer for context api
    const data = useContext(UserContext);
  return (
    <div>
      <h2>User: {data.name}</h2>
      <Details />
    </div>
  );
};

export default User;
