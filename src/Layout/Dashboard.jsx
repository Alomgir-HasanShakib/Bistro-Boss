import { FaHamburger, FaHome } from "react-icons/fa";
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
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-10 font-cinzel">
      <div className="w-64 h-screen bg-[#D1A054]">
        <ul className="menu p-4 space-y-4">
          <li>
            <NavLink to="dashboard">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard">
              <FaWallet></FaWallet> Peyment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping></FaCartShopping> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard">
              <MdReviews></MdReviews> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard">
              <FaBook></FaBook>My Booking
            </NavLink>
          </li>
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
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
