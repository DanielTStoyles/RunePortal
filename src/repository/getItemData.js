/** @format */

export const getItemData = async (itemId) => {
  try {
    const response = await fetch(`/api/items/${itemId}`);
    console.log(response);
    const data = response.json();

    if (!response.ok) {
      throw new Error(`Error 8: ${response.statusText}`);
    }

    console.log("fetched item data:", data);
    return data;
  } catch (error) {
    console.error(`error 7: ${error.message}`);
    return null;
  }
};

export const getItemsData = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/items");
    const data = response.json();

    if (!response.ok) {
      throw new Error(`Error 5: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error(`Error 6: ${error.message}`);
    return null;
  }
};

export const getItemByName = async (itemName) => {
  try {
    const response = await fetch(`http://localhost:3001/api/item/${itemName}`);
    const data = await response.json();
    console.log(data);
    console.log(response);

    if (!response.ok) {
      throw new Error(`Error 3: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error(`Error 4: ${error.message}`);
    return null;
  }
};
