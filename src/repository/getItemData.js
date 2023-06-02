/** @format */

const getItemData = async (itemId) => {
  try {
    const response = await fetch(`/api/items/${itemId}`);
    console.log(response);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error fetching item data: ${response.statusText}`);
    }

    console.log("fetched item data:", data);
    return data;
  } catch (error) {
    console.error(`error fetching item data: ${error.message}`);
    return null;
  }
};

const getItemsData = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/items");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error fetching items data: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error(`Error fetching items data: ${error.message}`);
    return null;
  }
};

export default getItemData;
export { getItemsData };
