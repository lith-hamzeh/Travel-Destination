import React from "react"
import Data from "../../data/db.json"
import "../tours/Tours.css"
import {useNavigate} from "react-router-dom"
const Tours=()=>{
    const Navi=useNavigate()
    const show=(e)=>{
        e.preventDefault()
        Navi(`/city/${(e.target.getAttribute("datatype"))}`)
    }



    let z=Data.map(({image,name,id})=>(
    <div className="icon" key={id}   >
        <img src={image} alt=""/>
         <p>{name}</p>
         <button onClick={show} datatype={id} >more details</button>
     </div>
    ))
    return(
        <div className="Tours">
            {z}
        </div>
    )
}


export default Tours