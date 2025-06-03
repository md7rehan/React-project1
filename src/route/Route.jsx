import Home from "../pages/Home";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import { createBrowserRouter } from "react-router-dom";
import Test1 from "../pages/Test1";
import Test2 from "../pages/Test2";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "about",
        element: <About />,
        //  children:[
        // {path:'test1', element:<Test1/>},
        // {path:'test2', element:<Test2/>}]
      },
      { path: "contact", element: <Contact /> },
      { path: "product", element: <Product /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default route;
