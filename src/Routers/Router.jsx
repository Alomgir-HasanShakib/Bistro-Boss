import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/CONTACT/ContactUs";
import OurMenu from "../Pages/Menu/OurMenu";
import OurShop from "../Pages/Our Shop/OurShop";
import Dashboard from "../Pages/DASHBOARD/Dashboard";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/contact',
                        element: <ContactUs></ContactUs>
                  },
                  {
                        path: '/menu',
                        element: <OurMenu></OurMenu>
                  },
                  {
                        path: "/shop",
                        element: <OurShop></OurShop>
                  },
                  {
                        path: "/dashboard",
                        element: <Dashboard></Dashboard>
                  }
            ]
      }
])

export default router