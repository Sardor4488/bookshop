import axios from 'axios' 
const baseUrl = `https://jsonplaceholder.typicode.com/photos?_limit=100` 
const getIneformation = async (setPhotos)=> {
    try {
        const res = await axios.get(baseUrl)
        setPhotos(res.data)
    } catch (error) {  
        console.log(error);
    } 
}  

export default getIneformation;