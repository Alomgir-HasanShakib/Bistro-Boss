import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Component/Section Title/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link, useLoaderData } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "menu deleted.",
              icon: "success",
            });
            refetch();
          }
        });
        //
      }
    });
  };

  return (
    <div>
      <SectionTitle subHead="Hurry Up" head="Manage All Items"></SectionTitle>
      <div>
        <div className="overflow-x-auto p-5 rounded-lg bg-white mx-5 font-inter">
          <h2 className="text-3xl font-bold font-cinzel text-black m-5">
            Total Items: {menu.length}
          </h2>
          <table className="table">
            {/* head */}
            <thead className="font-semibold bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <img className="w-12" src={item.image} alt="item image" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link
                      to={`/dashboard/updateMenu/${item._id}`}
                      className="btn btn-ghost text-xl text-yellow-600"
                    >
                      <FaEdit></FaEdit>{" "}
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost text-xl text-red-600"
                    >
                      <FaTrash></FaTrash>{" "}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
