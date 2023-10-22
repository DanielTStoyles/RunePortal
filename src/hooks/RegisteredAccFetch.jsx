/** @format */

import { useQuery } from "react-query";

const fetchUserAccList = async () => {
  const response = await fetch("/api/getUserAccList");
  if (!response.ok) {
    throw new Error("network response returned !ok");
  }
  return response.json();
};

const UserAccList = () => {
  const { data, error, isLoading } = useQuery("userAccList", fetchUserAccList);

  if (isLoading) {
    return <span>Loading....</span>;
  }
  if (error) {
    return <span> error: {error.message} </span>;
  }

  return (
    <div>
      {data.map((entry, index) => (
        <div key={index}>
          <p className="text-white">RSN: {entry.rsn}</p>
          <p className="text-white">Account Type: {entry.account_type}</p>
        </div>
      ))}
    </div>
  );
};

export default UserAccList;
