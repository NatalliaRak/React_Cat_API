import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const Creatures = () => {
    const [breed, setBreed] = useState();
  
  const url = 'https://api.thecatapi.com/v1/breeds';
     
  useEffect(() => {
     const fetchData = async () =>{
       try {
         const {data: breed} = await axios.get(url);
         setBreed(breed);
       } catch (error) {
         console.error(error.message);
       }
       
     }
 
     fetchData();
   }, []);

    return(
        <>
         { breed?.map((cat) => (
                <h3 key={cat.id}>
                <Link to={`/catbreeds/${cat.id}`}>
                {cat.name}
                </Link>
                </h3>
         ))}
        </>
    )
  };
  
  export default Creatures;
  
  