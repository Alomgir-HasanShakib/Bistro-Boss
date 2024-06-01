import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/Authentication";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      const user = {
        name: res.user.displayName,
        email: res.user.email,
      };
      axiosPublic.post("/users", user).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Register Success",
            showConfirmButton: false,
            timer: 1500,
          });
          
        }
      });
      navigate("/");
    });
  };
  return (
    <div className="mb-5">
      <button className="btn btn-[#D1A054]" onClick={handleGoogleLogin}>
        {" "}
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
