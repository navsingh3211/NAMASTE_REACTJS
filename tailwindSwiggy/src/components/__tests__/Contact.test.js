import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact"

test("should load contact us component",()=>{
    render(<Contact/>); //we are trying to render contact page on js-dom
    // screen.debug();
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument()
});

test("should load button inside contact us component",()=>{
    render(<Contact/>); //we are trying to render contact page on js-dom
    // screen.debug();
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument()
});

test("should sumbit text inside contact us component",()=>{
    render(<Contact/>); //we are trying to render contact page on js-dom
    // screen.debug();
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument()
});

test("should find placeholder inputName inside contact us component",()=>{
    render(<Contact/>); //we are trying to render contact page on js-dom
    // screen.debug();
    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on the Contact component",()=>{
    render(<Contact/>);

    //Querying 
    const inputBox = screen.getAllByRole("textbox"); //this will jsx element which will be an array
    // console.log(inputBox,'inputBox');
    
    //Assertion
    expect(inputBox.length).toBe(2);
});

// we can write test() as it() also
//we can write above whole case in single describe test case
describe("contact us page test case",()=>{
    it("should load contact us component",()=>{
        render(<Contact/>); //we are trying to render contact page on js-dom
        // screen.debug();
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument()
    });
    
    test("should load button inside contact us component",()=>{
        render(<Contact/>); //we are trying to render contact page on js-dom
        // screen.debug();
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument()
    });
    
    test("should sumbit text inside contact us component",()=>{
        render(<Contact/>); //we are trying to render contact page on js-dom
        // screen.debug();
        const button = screen.getByText("Submit");
    
        // Assertion
        expect(button).toBeInTheDocument()
    });
    
    test("should find placeholder inputName inside contact us component",()=>{
        render(<Contact/>); //we are trying to render contact page on js-dom
        // screen.debug();
        const inputName = screen.getByPlaceholderText("name");
    
        // Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes on the Contact component",()=>{
        render(<Contact/>);
    
        //Querying 
        const inputBox = screen.getAllByRole("textbox"); //this will jsx element which will be an array
        // console.log(inputBox,'inputBox');
        
        //Assertion
        // expect(inputBox.length).toBe(2);
        expect(inputBox.length).toBeTruthy();

    });
});