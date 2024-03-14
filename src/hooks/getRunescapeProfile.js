/** @format */

const getRunescapeProfile = async (rsn) => {
  // console.log(rsn, "getRunescapeProfile rsn log");
  try {
    const response = await fetch(`/api/playerData/${rsn}`);
    const data = await response.json();
    // console.log(data);

    if (!response.ok) {
      throw new Error(`Error fetching player data: ${response.statusText}`);
    }
    return data;
  } catch (error) {
    console.error(
      `Error fetching player data line 51 in getRunescapeProfile: ${error.message}`
    );
    return null;
  }
};

export default getRunescapeProfile;
