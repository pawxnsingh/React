/**
 * create this using the react lib
 * <div id="parent">
 *      <div id="child">
 *          <h1>
 *
 *          </h1>
 *      </div>
 * </div>
 * 
 * suppose if we have to create the struture like this
 * <div id="parent">
 *      <div id="child1">
 *          <h1>
 *          </h1>
 *      </div>
 * 
 *      <div id="child2">
 *          <h1>
 *          </h1>
 *      </div>
 * </div>
 *
 */

// const heading1 = React.createElement("h1", {}, "this the complex structure");
// ReactElemet(object) => html tag(BTS)

// const parent = React.createElement(
//     "div",
//     {
//         id: "parent"
//     },
//     React.createElement(
//         "div",
//         {
//             id: "child"
//         },
//         React.createElement("h1", {}, "its is the h1 tag")
//     )
// );

// if you have to make the sibling then just pass it as the array
// and this is the core of the react and many people think we can write our code in jsx only
// the below code is core react
// and jsx will make this code clean and maintainable when we have to create tag

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {
        id: "parent",
    },
    [
        React.createElement(
            "div",
            {
                id: "child",
            },
            React.createElement("h1", {}, "its is the h1 tag")
        ),
        React.createElement(
            "div",
            {
                id: "child",
            },
            React.createElement("h1", {}, "its is the h2 tag")
        ),
    ]
);

// but but but this makes our code more complex and clumsy
// and that why jsx came into picture
// this is the last element we will be using the react.createElement`

// created the element using the React
const heading = React.createElement(
    // function createElement(type,config,children)
    "h1",
    {
        // this is the place where we assign the attributes to a tag
        id: "heading",
        // or even css in this place
    },
    "Hello world from React!!"
);

// console.log(heading);

// at the end of the day the "heading" is the object and that object is not rendered into the html tag

// now enable the react container as root
// this will make the div container as root and there can be only one root in one file
// and we can render only one time
const root = ReactDOM.createRoot(document.getElementById("root"));
// now render the heading element into the div container
// console.log(root);
// this render function will renders the heading object into the h1 html tag
root.render(parent);