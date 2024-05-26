import { createContext, useContext, useState } from "react";

const FounderContext = createContext();

export const FounderProvider = ({ children }) => {
  const initialState = {};

  const [founderState, setFounderState] = useState(initialState);

  return (
    <FounderContext.Provider value={{ founderState, setFounderState }}>
      {children}
    </FounderContext.Provider>
  );
};

export const useFounderState = () => {
  return useContext(FounderContext);
};
