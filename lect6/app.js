import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../lect6/component/Header";
import Body from "../lect6/component/Body";
import "./app.css";


const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
