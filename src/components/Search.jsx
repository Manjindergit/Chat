import React from "react";

const Searchbar=()=>{
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find contact"/>
            </div>
            <div className="userChat">
                <img src="https://www.musicbusinessworldwide.com/files/2017/06/elonmusk-scaled.jpg" alt="" />
                <div className="userChatInfo">
                    <span>jane</span>
                </div>
            </div>
        </div>
    )
}

export default Searchbar