// eslint-disable-next-line
import React, { Component }  from 'react'; 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Games from "./pages/Games";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./styles.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Games/>}> </Route>
          <Route path="/add" element={<Add/>}> </Route>
          <Route path="/update/:id" element={<Update/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
