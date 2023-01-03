import "./App.css";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./components/Detail";
import Forme from "./components/EventForm";
import { React } from "react";
import Context from "./components/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <Routes>
          <Route path="/" element={<Forme />}></Route>
          <Route path="/detail" element={<DetailPage />}></Route>
        </Routes>
      </Context>
    </div>
  );
}

export default App;
