import React, { createContext, useState } from "react";
import { dummyData } from "../data/DummyData";

export const PropertiesContext = createContext();
const PropertiesContextProvider = ({ children }) => {
  const [properties, setProperties] = useState(dummyData);
  return (
    <PropertiesContext.Provider value={{ properties }}>
      {children}
    </PropertiesContext.Provider>
  );
};
export default PropertiesContextProvider;
