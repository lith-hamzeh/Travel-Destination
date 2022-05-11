import React from "react";
import "../header/Header.css"
import {useNavigate} from "react-router-dom"


const Header=()=>{
    const Navi=useNavigate()
    const gotohome=()=>{
        Navi("/")
    }
    return(
        <div className="container2">
            <h1>TRAVEL-DESTNATION</h1>
            <button onClick={gotohome}>home</button>
        </div>
    )
}


export default Header