import { createContext, useContext, useState } from "react";

const GlobalComponentsContext = createContext();

export const GlobalComponentsProvider = ({ children }) => {
  const [globalComponentsState, setGlobalComponentsState] = useState({
    GC1: {
      isOpen: false,
      children: null,
      open: function (children) {
        setGlobalComponentsState({
          ...globalComponentsState,
          GC1: {
            ...globalComponentsState.GC1,
            isOpen: true,
            children: children,
          },
        });
      },
      close: function () {
        setGlobalComponentsState({
          ...globalComponentsState,
          GC1: {
            ...globalComponentsState.GC1,
            isOpen: false,
          },
        });
      },
    },
  });

  return (
    <GlobalComponentsContext.Provider
      value={{ globalComponentsState, setGlobalComponentsState }}
    >
      {children}
    </GlobalComponentsContext.Provider>
  );
};

export const useGlobalComponentsState = () => {
  return useContext(GlobalComponentsContext);
};
