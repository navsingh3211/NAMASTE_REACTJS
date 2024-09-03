/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * ==> React.createElement(Create an Object),not a html
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
    )
);// type of parent is object

console.log(parent);//object type




// const heading = React.createElement(
//     "h1", 
//     { id: "heading", xyz: "abc" }, 
//     "Hello world from react!"
// ); //{} is used to pass attribute inside h1 tag

// console.log(heading);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(parent)