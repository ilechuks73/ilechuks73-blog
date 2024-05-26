import { createContext, useContext, useState } from "react";
import { io } from "socket.io-client";

const WebsocketContext = createContext();

export const WebsocketProvider = ({ children }) => {
  const [websocket, setWebsocket] = useState({
    socket: null,
    connect: async function (query) {
      let socket = await io(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
        transports: ["websocket"],
        query: { ...query },
      });
      setWebsocket({ ...websocket, socket: socket });
    },
  });

  return (
    <WebsocketContext.Provider value={{ websocket, setWebsocket }}>
      {children}
    </WebsocketContext.Provider>
  );
};

export const useWebsocket = () => {
  return useContext(WebsocketContext);
};
