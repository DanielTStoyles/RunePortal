/** @format */

const getItemData = async (itemId) => {
  try {
    const response = await fetch(`/api/item/${itemId}`); // {itemID} will be result of a function that id's the itemId of the item name user types in an input field
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

export default getItemData;
