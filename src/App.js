  
import React, { createContext, useEffect, useState } from "react";

import { NewsContextProvider } from "./NewsContext";

import "./App.css";

function App() {
  return (
    
      <NewsContextProvider />
       
  );
}

export default App;