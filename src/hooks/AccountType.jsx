/** @format */

import { useQuery } from "react-query";

const fetchAccountType = async () => {
  const response = await fetch("/api/getAccountType", {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Bad network response ");
  }
  return response.json();
};

const AccountType = () => {
  const {
    data: user,
    isError,
    isLoading,
  } = useQuery("account_type", fetchAccountType);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error fetching username</span>;
  }

  const { account_type } = user?.[0] || {};

  return <span>{account_type}</span>;
};

export default AccountType;
