import Header from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Testing our header component", () => {
  //running our test case in isolation
  test("Should load header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    // const loginButton = screen.getByText("Login");

    //Assertion
    expect(loginButton).toBeInTheDocument();
  });

  test("Should render Header Component with a Cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart-(0 items)");

    //assertion
    expect(cartItems).toBeInTheDocument();
  });
});
