import SectionTitle from "../../../Component/Section Title/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `http://freeimage.host/api/1/upload/?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [menuItems, setMenuItem] = useState({});

  const onSubmit = async (data) => {
    console.log(data);
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);
    const imageRes = await axiosPublic.post(
      "https://api.imgbb.com/1/upload?key=015334421fc290847de066edce69a4c4",
      formData
    );
    const price = parseFloat(data.price);
    if(imageRes.data.success){
      const image = imageRes.data.data.display_url;

      const menuItem = {
        name: data.name,
        image: image,
        recipe:data.recipi,
        category: data.category,
        price: price
      }
      const manuRes = await axiosSecure.post('/menu',menuItem)
      if(manuRes.data.insertedId){
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu Added",
          showConfirmButton: false,
          timer: 1500,
        });
      }

    }
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
              placeholder="Recipi Name"
              {...register("name", { required: true })}
              className="input capitalize input-bordered w-full "
            />
          </label>
          <div className="flex gap-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                {...register("category", { required: true })}
                defaultValue="select"
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
                placeholder="Price"
                {...register("price", { required: true })}
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
              placeholder="Recipi Details"
              {...register("recipi", { required: true })}
            ></textarea>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs block"
            {...register("image", { required: true })}
          />

          <button className="btn btn-warning mt-5 flex mr-2 text-white">
            Add Item <FaUtensils />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
