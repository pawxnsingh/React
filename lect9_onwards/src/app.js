import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";
import Error from "./component/Error";
// here we will import the whole different aspect of the code , suppose it has lot of component
const Grocery = lazy(() => import("./component/Grocery"));

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "../../lect9_onwards/app.css";

// this is the root level part of the project and we have to create out router here

const App = () => {
    return (
        <div className="app">
            <Header />
            {/* outlet is will get replaced by the createBrowserRouter's Children,according to their respective path 
                and it act as placeholder */}
            {/* Route Nesting: When you define a route component, you can use <Outlet>
                 within it to specify where the child components of that route should be rendered. */}
            <Outlet />
        </div>
    );
};

// this thing is also given in the react-router-dom docs
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Something Great is loading</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        // and this will load the <Error /> page in the ui with the Header
        errorElement: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);
