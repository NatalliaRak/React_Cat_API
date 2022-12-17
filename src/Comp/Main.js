import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Nav from "./Nav";
import Creatures from './Creatures';
import CreaturesDetails from './CreaturesDetails';


export default function Main(){

    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}>
            <Route index element={<Home />} />
            <Route path="/catbreeds" element={<Creatures />} />
            <Route path="catbreeds/:id" element={<CreaturesDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )

}