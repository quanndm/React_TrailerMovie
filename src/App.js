import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from "./config/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
