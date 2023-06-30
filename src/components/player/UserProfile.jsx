/** @format */

import { useState, useEffect } from "react";

const UserProfile = ({ username }) => {
  const [triumphs, setTriumphs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserTriumphs(username);
      setTriumphs(data);
    };

    fetchData();
  }, [username]);
};
