/** @format */

import axios from "axios";

export const fetchUserTriumphs = async (username) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/users/${username}/triumphs`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const addUserTriumph= async (username, triumphId)=>{
//     try {
//         const response=await axios.get(`/users/${username}/triumphs`)
//         console.log(response.data);

//     } catch (error){
//         console.error(error);
//     }
// };
