import axios from "axios";
import { useEffect,useState } from "react";
import React  from 'react';



export const NewsContext=React.createContext();

export const News = (props) => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-21&sortBy=publishedAt&apiKey=f0cc6e9dae1f44c9973c729d9bf07c1c`)
        .then(response=>{
            setdata(response.data);
        })
        .catch(error=>console.log(error));
        
    }, [])
    
    
    return (
        <div>
          <NewsContext.Provider value={data}>
              
              {props.children}

              </NewsContext.Provider>  
   </div>
    )
}
