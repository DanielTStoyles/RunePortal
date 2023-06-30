import axios from axios;

const fetchUserTriumphs = async (username)=>{
    try{
        const response =await axios.get(`/users/${username}/triumphs`);
        console.log(response.data);
    } catch (error){
        console.error(error)
    }
};


const addUserTriumph= async (username, triumphId)=>{
    try {
        const response=await axios.get(`/users/${username}/triumphs`)
        console.log(response.data);

    } catch (error){
        console.error(error);
    }
};


