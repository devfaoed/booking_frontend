import React from "react";
import "./featured.css"

function Featured(){
    return(
        <div className="feautred">
            <div className="feautredItem">
                <img src="https://th.bing.com/th/id/OIP.ivqSR90nUfwrJ7M2eeBz5gHaE7?w=263&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="feauturedImg" />
                    <div className="featuredTitles">
                        <h1>Dublin</h1>
                        <h2>123 properties</h2>
                    </div>
            </div>

            <div className="feautredItem">
                <img src="https://th.bing.com/th/id/OIP.3_xmTegv5NCVc0Ln4JGm4gHaFj?w=217&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="feauturedImg" />
                    <div className="featuredTitles">
                        <h1>Austin</h1>
                        <h2>532 properties</h2>
                    </div>
            </div>

            <div className="feautredItem">
                <img src="https://th.bing.com/th/id/OIP.CaHjqWYpogHAXckSsPg1MAHaEF?w=313&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="feauturedImg" />
                    <div className="featuredTitles">
                        <h1>Reno</h1>
                        <h2>320 properties</h2>
                    </div>
            </div> 
        </div>
    )
}

export default Featured
