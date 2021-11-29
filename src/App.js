import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import { NotFound } from "http-errors";

function App() {

  return (
       <Routes>
         <Route path="/" element={ <Home/>} />
         <Route path="/Shop" element={ <Shop/>} />
         <Route component={ <NotFound />}/>
       </Routes>
  );
}

export default App;