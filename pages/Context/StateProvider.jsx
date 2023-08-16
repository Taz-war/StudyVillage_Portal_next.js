import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const StateContex = createContext();

const StateProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [marketingResource,setMarketingResource] =useState(false)
  const [learningResource,setLearningResource] =useState(false)
  const [destinationPrep,setDestinationPrep] =useState(true)
  return (
    <StateContex.Provider value={{ open, setOpen ,marketingResource,setMarketingResource,learningResource,setLearningResource,destinationPrep,setDestinationPrep}}>
      {children}
    </StateContex.Provider>
  );
};

export default StateProvider;
