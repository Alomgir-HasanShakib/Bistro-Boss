import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const Table = ({ item, idx }) => {
  const { name, price, image, _id } = item;
  const [,refetch] = useCart()
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your food deleted.",
              icon: "success",
            });
            refetch()
          }
        });
        //
      }
    });
  };
  return (
    <tr>
      <th>{idx}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost text-xl text-red-600"
        >
          <FaTrash></FaTrash>
        </button>
      </th>
    </tr>
  );
};

export default Table;
