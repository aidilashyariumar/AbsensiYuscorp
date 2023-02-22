import axios from "../helper/axios";
// import axios from "axios"

const getAllPosition = async () => {
    try{
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const response = await axios.get('/position')
        return response.data
    } catch(e){
        return e.response.data
    }
}


export {getAllPosition}