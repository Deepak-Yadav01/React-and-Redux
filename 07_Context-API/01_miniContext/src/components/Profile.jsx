import React, { useContext } from "react";
import UserContext from "../context/UserContect";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user || !user.username) return <h2>Please Login</h2>;

  return <h1>Welcome {user.username} </h1>;
};

export default Profile;
