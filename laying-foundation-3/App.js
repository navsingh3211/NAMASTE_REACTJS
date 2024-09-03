import React from "react";
import ReactDom from "react-dom/client";

//React.createElement => ReactElement-JS object => htmlElement(render)
const heading = React.createElement("h1",{id:"heading"},"Namaste react");


//1.) JSX - Html like or XML-like syntex
//2.) JSX(transfiled before it reaches the JS) - Parcel-babel 
//3.)JSX ==> React.createElement => ReactElement-JS object => htmlElement(render)
const jsxHeading = <h1>Namaste ract using jsx</h1>;
console.log(jsxHeading,'jsxHeading');


const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);
