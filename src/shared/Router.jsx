import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../components/Form";
import DetailTodo from "../pages/DetailTodo";
import Home from "../pages/Home";


const Router = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/detail/:id' element={<DetailTodo/>}/>
    <Route path='/form' element={<Form/>}/>
   
  </Routes>
  </BrowserRouter>
  )
}

export default Router