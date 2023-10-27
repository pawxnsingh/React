import React from "react";
import ReactDOM from "react-dom/client";
import YTlogo from "./img/youtube-logo.jpeg";
import userIcon from "./img/4870083.jpg";
import "./assignment_2.css";


const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img className="header-logo" src={YTlogo}/>
            </div> 

            <div className="header-middle">
                <input className="search-bar" placeholder="Enter" type="text" />
            </div>

            <div className="header-right">
                <img className="user-logo" src={userIcon} />
            </div>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
