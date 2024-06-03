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
import Reservation from "../Pages/Dashboard/Reservation";
import Review from "../Pages/Dashboard/Review";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import Mybooking from "../Pages/Dashboard/Mybooking";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/ForAdmin/AdminHome";
import AddItems from "../Pages/Dashboard/ForAdmin/AddItems";
import ManageItems from "../Pages/Dashboard/ForAdmin/ManageItems";
import ManageBookings from "../Pages/Dashboard/ForAdmin/ManageBookings";
import AllUsers from "../Pages/Dashboard/ForAdmin/AllUsers";
import AdminRoute from "./AdminRoute";
import UpdateMenu from "../Pages/Dashboard/ForAdmin/UpdateMenu";

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
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // =================================================================normal user route ==============================
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "myBooking",
        element: <Mybooking></Mybooking>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      // ===============================================admin route here ==================================
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            {" "}
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateMenu/:id",
        element: (
          <AdminRoute>
            {" "}
            <UpdateMenu></UpdateMenu>{" "}
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "managebook",
        element: (
          <AdminRoute>
            {" "}
            <ManageBookings></ManageBookings>
          </AdminRoute>
        ),
      },
      {
        path: "alluser",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
