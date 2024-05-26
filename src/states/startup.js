import { createContext, useContext, useState } from "react";

const StartupContext = createContext();

export const StartupProvider = ({ children }) => {
  const initialState = {};

  const [startupState, setStartupState] = useState(initialState);

  return (
    <StartupContext.Provider value={{ startupState, setStartupState }}>
      {children}
    </StartupContext.Provider>
  );
};

export const useStartupState = () => {
  return useContext(StartupContext);
};
