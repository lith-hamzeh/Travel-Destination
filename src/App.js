import React from "react";
import Home from "./components/home/Home"
import Header from "./components/header/Header"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import TourDetails from "./components/TourDetails/TourDetails";
import Footer from "./components/footer/Footer"



const App=()=>{
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/city/:id" element={<TourDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}


export default App