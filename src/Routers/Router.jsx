import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/CONTACT/ContactUs";
import OurMenu from "../Pages/Menu/OurMenu";
import OurShop from "../Pages/Our Shop/OurShop";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/shop",
        element: <OurShop></OurShop>,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        
      }
    ]
  }
]);

export default router;
