import React, { useRef, useState } from "react";
import {useParams} from "react-router-dom"
import Data from  "../../data/db.json"
import "../TourDetails/TourDetails.css"
const TourDetails=()=>{
    const [state,setstete]=useState("show more")
    const ids=useParams()
    const info=useRef()
    let select=Data.find((a)=>(a.id===ids.id))
    console.log(select)
const buttonselect=(e)=>{
    console.log(e.target)
    info.current.classList.toggle("active");
    if(state==="show more"){
        setstete("show less")
    }
    else{
        setstete("show more")
    }
}
    return(
    <div className="container1">
        <img src={select.image}alt=""/>
        <div className="text">
            <p>name:{select.name}</p><p>price:{select.price}</p>
        </div>
        <div className="info" ref={info}>
            <p>{select.info}</p>
        </div>
        <button onClick={buttonselect}>{state}</button>
    </div>
    )
}

export default TourDetails