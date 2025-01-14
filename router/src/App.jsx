
import { Helmet } from 'react-helmet'
import React from "react";
import './App.css'

import Navbar from './Navbar/Navbar';
import Home from './router/Home';
import { Route, Routes } from 'react-router';
import Blog from './router/Blog';
import NotFound from './router/NotFound';

function App() {

  return (
    <>
    <Routes>

    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>} /> 
    <Route path ="/blog" element={<Blog/>}/>
    </Route>
    <Route path='/*' element={<NotFound/>} /> 
    </Routes>


     
    </>
  )
}

export default App
  