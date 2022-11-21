import React from "react";
import upload from "../img/upload.jpg"

const Input=()=>{
    return(
        <div className="input"> 
            <input type="text" placeholder="say something......" />
            <div className="send">
                <img src={upload} alt="" />
                <input type="file" style={{display: "none"}} id="file"/>
                <label htmlFor="file">
                    <img src="" alt="" />
                </label>
                <button>Send</button>

            </div>
        </div>
    )
}

export default Input