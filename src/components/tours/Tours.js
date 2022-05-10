import React from "react"
import Data from "../../data/db.json"
import "../tours/Tours.css"
const Tours=()=>{
    let z=Data.map(({image,name},i)=>(
    <div className="icon" key={i}>
        <img src={image} alt=""/>
         <p>{name}</p>
     </div>
    ))
    return(
        <div className="Tours">
            {z}
        </div>
    )
}


export default Tours