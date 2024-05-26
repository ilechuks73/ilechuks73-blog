import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {};

  const [userState, setUserState] = useState(initialState);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserState = () => {
  return useContext(UserContext);
};
