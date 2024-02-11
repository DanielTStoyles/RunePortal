/** @format */

const fetchAdventureLog = async () => {
  const playerId = "Wuglington"; // hardcoded to test with
  try {
    const response = await fetch(`/api/adventure-logs/${playerId}`);
    if (!response.ok) {
      throw new Error("Bad network response");
    }
    const logs = await response.json();

    const entries = logs.map((log) => log.detail);

    // Output the entries to the console or return them
    console.log(entries);
    return entries;
  } catch (error) {
    console.error("Problem with fetch in fetchAdventureLog", error);
    return []; // Return an empty array as a fallback
  }
};

export default fetchAdventureLog;
