import React from "react";
import ReactDom from "react-dom/client";

//React.createElement => ReactElement-JS object => htmlElement(render)
const heading = React.createElement("h1",{id:"heading"},"Namaste react");


//React Element
//1.) JSX - Html like or XML-like syntex
//2.) JSX(transfiled before it reaches the JS) - Parcel-babel 
//3.)JSX ==> React.createElement => ReactElement-JS object => htmlElement(render)
//4.) Babel convert JSX into React.createElement
// 5.) Babel is a js compiler
const jsxHeading = (<h1 className="head">
    Namaste ract using jsx
    ram jane
    syamajane
</h1>);
console.log(jsxHeading,'jsxHeading');

//React Component:-
//Class based component - OLD
//Functional Component - NEW (A function which return some piece of react element or JSX)
const elem = <span>Extra data value</span>
const Title = ()=>(
    <div id="title">
        <h1 className="heading">
            {elem} <br></br>
            Namaste React
        </h1>
    </div>
)

//component composition
const number = 10000;
const HeadingCoponent = ()=>(
    <div id="container">
        {number}
        {jsxHeading}
        <Title/>
        <h1 className="heading">Namaste React Functional1 component</h1>
    </div>
)


const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);

root.render(<HeadingCoponent/>);
