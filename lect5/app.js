import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../lect5/component/Header";
import Body from "../lect5/component/Body";
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
