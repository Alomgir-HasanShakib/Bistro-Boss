import { useContext } from "react";
import { AuthContext } from "../../Context/Authentication";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const Card = ({ menu }) => {
  const { price, category, image, recipe, name, _id } = menu;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()

  const handleAddtoCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        user: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add to Cart done",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
        }
      });
    } else
      [
        Swal.fire({
          title: "You are not Logged in!",
          text: "Please login for add to cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", { state: { from: location } });
          }
        }),
      ];
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="menu Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>{category}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddtoCart}
            className="btn  border-0 border-b-4 border-b-yellow-800 text-yellow-800 hover:bg-black hover:border-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
