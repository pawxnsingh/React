import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
    const [btnClickReact, setbtnClickReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src={LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button
                        className="button"
                        onClick={() => {
                            btnClickReact === "Login"
                                ? setbtnClickReact("Logout")
                                : setbtnClickReact("Login");
                        }}
                    >
                        {btnClickReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;
// and you cant write two default export statement in the one componenet

// Yes, you can use both default exports and named exports together in a JavaScript module.
// Combining default and named exports can be useful when you want to export a "default" item that is
// considered the primary export of the module, along with other items that are not the main focus of
// the module but can still be accessed individually. Here's how it works:
// **Example**
// export const namedExport1 = "I'm a named export";
// export const namedExport2 = "I'm another named export";

// const defaultExport = "I'm the default export";
// export default defaultExport;

// In this example, we have a module named "module.js" that exports both
// a default export and named exports. You can import these exports in another module like this:

// import defaultExport, { namedExport1, namedExport2 } from './module';
// console.log(defaultExport); // "I'm the default export"
// console.log(namedExport1);  // "I'm a named export"
// console.log(namedExport2);  // "I'm another named export"

// By using both default and named exports in this way, you can provide a clear main export
// for your module while also making other functionalities or values available for import when needed.
