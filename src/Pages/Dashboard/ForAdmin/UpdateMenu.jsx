import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../Component/Section Title/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateMenu = () => {
  const menuItems = useLoaderData();
  const { id } = useParams;
  //   console.log(menuItem);
  const { name, price, category, recipe } = menuItems;
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const menuItem = {
      name: data.name,
      category: data.category,
      price: data.price,
      recipe: data.recipe,
    };
    const updateRes = await axiosSecure.put(`/menu/${menuItems._id}`, menuItem);
    if (updateRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Menu Updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    //
  };

  return (
    <div>
      <SectionTitle head="Add An Items" subHead="What's New?"></SectionTitle>
      <div className="px-10">
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 font-inter">
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipi Name</span>
            </div>
            <input
              type="text"
              defaultValue={name}
              placeholder="recipi name"
              {...register("name")}
              className="input capitalize input-bordered w-full "
            />
          </label>
          <div className="flex gap-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                {...register("category")}
                defaultValue={category}
                className="select select-bordered w-full"
              >
                <option disabled value="select">
                  Select One
                </option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Drinks</option>
                <option>Dezzart</option>
                <option>Soup</option>
              </select>
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price")}
                className="input capitalize input-bordered w-full "
              />
            </label>
          </div>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipi Details</span>
            </div>
            <textarea
              className="textarea capitalize textarea-bordered"
              defaultValue={recipe}
              placeholder="Recipi details"
              {...register("recipe")}
            ></textarea>
          </label>

          <button className="btn bg-yellow-600 mt-5 flex mr-2 w-full text-white">
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenu;
