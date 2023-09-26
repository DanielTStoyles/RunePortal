/** @format */

const getUsername = async () => {
  const response = await fetch(`/api/getUsername/:id`);
  if (!response.ok) {
    throw new Error("Network response wasn't ok");
  }
  const data = await response.json();
  return data.username;
};

export default getUsername;
