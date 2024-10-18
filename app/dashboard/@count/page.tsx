import axios from "axios"

const countPage = async () => {
    const countLocations = await axios.get('http://localhost:4000/locations')
    console.log(countLocations.data);
    
    return "Hay tantas locations: "+ countLocations?.data?.length;
}

export default countPage