/** @format */

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUser = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return { rsn: "Loading..." };
  }

  return user;
};

export default useUser;
