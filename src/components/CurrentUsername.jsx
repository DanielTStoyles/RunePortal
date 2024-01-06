/** @format */

import { useQuery } from "react-query";

const fetchUsername = async () => {
  const response = await fetch("/api/getUsername", {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Bad network response ");
  }
  return response.json();
};

const CurrentUsername = () => {
  const {
    data: user,
    isError,
    isLoading,
  } = useQuery("username", fetchUsername);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error fetching username</span>;
  }

  return <span>{user.username}</span>;
};

export default CurrentUsername;
