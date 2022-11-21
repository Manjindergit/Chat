import React from "react";

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="logo">
            <span className="logo">Talk</span>
            </div>
            <div className="user">
                <img src="https://www.musicbusinessworldwide.com/files/2017/06/elonmusk-scaled.jpg" alt="" />
                <span>User</span>
                <button>Logout</button>
            </div>
    
        </div>
    )
}

export default Navbar