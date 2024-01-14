/** @format */

const fetchAdventureLog = async () => {
  const playerId = "999"; //hardcoded in to test wit
  try {
    const response = await fetch(`/api/fetchAdventureLog/${playerId}`);
    console.log(response);
    if (!response.ok) {
      throw new Error("bad network resposne");
    }
    await response.json();
    return "good";
  } catch (error) {
    console.error("problem with the fetch in fetchAdventureLog");
  }
};

export default fetchAdventureLog;
