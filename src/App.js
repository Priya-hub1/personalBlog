import React from "react";
import "./App.css";
import Home from "./Home";
import Technology from "./Technology";
import {BrowserRouter,Link,Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/technology' element={ <Technology />}></Route>
        <Route path='/sports' element={ <Technology />}></Route>
        <Route path='/gardening' element={ <Technology />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}



