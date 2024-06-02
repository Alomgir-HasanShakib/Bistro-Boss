import { FaHamburger, FaHome, FaList, FaUser, FaUsers } from "react-icons/fa";
import {
  FaAddressCard,
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaShop,
  FaShopSlash,
  FaWallet,
} from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin]  = useAdmin()
  return (
    <div className="flex gap-10 font-cinzel bg-[#F6F6F6] mb-10">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 space-y-4 font-medium text-black">
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
            <li>
            <NavLink to="/dashboard/additems">
            <GiForkKnifeSpoon /> Add Items
            </NavLink>
          </li>
            <li>
            <NavLink to="/dashboard/manageitems">
              <FaList></FaList> Manage Items
            </NavLink>
          </li>
            <li>
            <NavLink to="/dashboard/managebook">
              <FaBook></FaBook> Manage Bookings
            </NavLink>
          </li>
            <li>
            <NavLink to="/dashboard/alluser">
              <FaUsers></FaUsers>All User
            </NavLink>
          </li>
            </>:
            <>
            <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaWallet></FaWallet> Peyment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping></FaCartShopping> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdReviews></MdReviews> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
              <FaBook></FaBook>My Booking
            </NavLink>
          </li>
            </>
          }
          <hr />
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHamburger></FaHamburger>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaShopSlash></FaShopSlash>Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaEnvelope></FaEnvelope>Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 w-full ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
