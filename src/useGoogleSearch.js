import React,{useState, useEffect} from 'react'
import API_KEY from "./key";

const CONTEXT_KEY = "c2c752626a2a12b93"


const useGoogleSearch = (term) => {
    const [data,setData] = useState(null);


    useEffect(() =>{
     const fetchData = async() =>{
         fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`

         )
         .then(response => response.json())
         .then(result => {

            setData(result)})
     }

     fetchData();

    },[term])
   return { data }

    return (
        <div>
            
        </div>
    )
}

export default useGoogleSearch
