import { createContext, useState } from "react";


export const Detail = createContext();

export default function Context({ children }) {
  const [Event, setEvent] = useState([]);
  const [prat, setPrat] = useState({});
  return (
    <Detail.Provider value={{ Event, setEvent, prat, setPrat }}>
      {children}
    </Detail.Provider>
  );
}
