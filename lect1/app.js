import React from "react";
// import reactDom from "react-dom";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(Object) -> htmlElement(render)

// this below code is a core way of writing the React Element
// but this is not the good way of not writing react code

// const heading = React.createElement(
//     "h1",
//     {
//         id: "heading",
//     },
//     "Hello World"
// );

// console.log(heading);
// and here jsx came into the picture and
// jsx is html like or xml like syntax
// jsx is different syntax

// JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.

// https://www.freecodecamp.org/news/jsx-in-react-introduction/

// JSX ->  React.createElement => ReactElement(Object) -> htmlElement(render)

const jsxHeading = (
    <h1 className="heading" tabIndex="5">
        this is jsx heading
    </h1>
);

// console.log(jsxHeading);
// both the above code is same and have is a react object and jsx is rendered by the javascript transcompiler known as babel

const root = ReactDOM.createRoot(document.getElementById("root"));

// this is how react element is rendered
// root.render(jsxHeading);

// now move ahead and lets learn react component
// class based componenet
// function based componenet

// 1. functional component
// what is functional component that is normal javacript function
// that return the piece of jsx code or return react Element
// basic convention while writing the code is to use first letter
// capital of every React component

// lowercase -> element && capitalise -> componenet

const Title = () => <h1 className="title">React Heading using JSX</h1>;
const Title1 = () => <h1 className="title">React Heading using JSX🚀</h1>;

const title = <h1 className="title">React Heading using JSX</h1>;

const number = 10000;
// we can also use the normal function but it is thet industry standard to use the arrow function
const HeadingComponent = () => {
    return (
        <div id="container">
            {/* this is called componenet composition, quite heavy jargon*/}
            <Title />
            {/* we can write these thing like this as well */}
            <Title> </Title>
            {/* as we know that we can write multiline jsx in the parenthesis and we can use the curly parenthesis in the the jsx code to write any javascript code */}
            {/* the js expression gonna put here in the { } */}

            {/* <h2>{number}</h2> */}

            {/* we can write any javascript code into it */}
            {Title()}
            {/*  jsx will automatically execute the code with open eyes and prevent cross site scritting */}
            {/* we can execute the element in componenet && componenet in element && component in componenet && element in element */}
            <h1 className="heading" id="main">
                Hello World
            </h1>
            <Title1 />
        </div>
    );
};

// console.log(Heading);
// now the question is how this componenet is render
root.render(<HeadingComponent />);
