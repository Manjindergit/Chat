import React from "react";
import upload from "../img/upload.jpg"

const Input=()=>{
    return(
        <div className="input"> 
            <input type="text" placeholder="say something......" />
            <div className="send">
                <img src={upload} alt="" />
              
                <button>Send</button>

            </div>
        </div>
    )
}

export default Input