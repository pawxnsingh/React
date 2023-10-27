import React from "react";
import ReactDOM from "react-dom/client";

// create same element using the jsx
const headingJsx = (
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

// create a componenet
const HeadingComp = () => {
    return (
        <div className="title">
            <h1 id="head1">Heading 1</h1>
            <h2 id="head2">Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    );
};

const header = React.createElement(
    "div",
    {
        class: "title",
    },
    [
        React.createElement("h1", {}, "Heading 1"),
        React.createElement("h2", {}, "Heading 2"),
        React.createElement("h3", {}, "Heading 3"),
        <HeadingComp/>
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
