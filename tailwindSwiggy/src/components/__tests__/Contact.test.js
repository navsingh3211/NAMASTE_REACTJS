import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact"

test("testing for contact us",()=>{
    render(<Contact/>); //we are trying to render contact page on js-dom
    // screen.debug();
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument()
})