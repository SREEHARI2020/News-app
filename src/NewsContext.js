import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {News} from './components/News'

export const NewsContext = createContext();

export const NewsContextProvider= (props) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=f0cc6e9dae1f44c9973c729d9bf07c1c`
      )
      .then((response) =>console.log(response.data))
      .catch((error) => console.log(error));
      
  }, []);

  return (
    <NewsContext.Provider value={data}>
      
     <News />
    </NewsContext.Provider>
  );
};