import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

/*
  -Chunking
  -Code spliting
  -Dynamic Bundling
  -Lazy Loading
  -on demand loading 
*/
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  //authentication
  useEffect(() => {
    //Make an API call and send username and password
    const data = {
      name: "Navneet Singh",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/*  any where inside our app,the value of context provider will be avalible.
     we can apply to context to any specific portion also like on header exp:below
    Default username --> outside the provider */}
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* "Navneet Singh" */}
        <div className="app">
          <userContext.Provider value={{ loggedInUser: "Elon musk" }}>
            {/* "Elon musk" */}
            <Header />
          </userContext.Provider>
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
