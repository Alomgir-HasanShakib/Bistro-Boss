import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Navbar/NavBar";

const Root = () => {
  return (
    <div>
      {/* navbar  */}
      <NavBar></NavBar>

      {/* out let  */}
      <div className="min-h-[calc(100vh-290px)]">
        <Outlet></Outlet>
      </div>
      {/* foooter  */}

      <Footer></Footer>
    </div>
  );
};

export default Root;
