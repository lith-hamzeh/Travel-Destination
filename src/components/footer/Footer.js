import React from "react";
import { BsFacebook,BsGoogle,BsGithub } from 'react-icons/bs';
import "../footer/Footer.css"


const Footer=()=>{
    return(
        <div className="footer">
              <p>lith-hamzeh @google.com</p>
              <div> 
                  <BsFacebook/>
                  <BsGoogle/>
                  <BsGithub/>
              </div>
        </div>
    )
}


export default Footer