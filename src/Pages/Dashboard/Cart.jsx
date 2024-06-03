import { Link } from "react-router-dom";
import Table from "../../Component/CartTable/Table";
import SectionTitle from "../../Component/Section Title/SectionTitle";
import useCart from "../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <SectionTitle head="Wanna Add More?" subHead="My Craft"></SectionTitle>
      <div className="overflow-x-auto  border mt-20 p-12 bg-white">
        <div className="flex justify-around mb-9">
          <h2 className="text-black text-3xl font-bold">
            Total orders: {cart.length}
          </h2>
          <h2 className="text-black text-3xl font-bold">
            total price: ${totalPrice}
          </h2>
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="btn  bg-[#D1A054] text-white px-8">Pay</button>
            </Link>
          ) : (
            <button className="btn disabled text-white px-8">Pay</button>
          )}
        </div>
        <table className="table ">
          {/* head */}
          <thead className="bg-[#D1A054] text-xl rounded-2xl text-white">
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <Table idx={idx} key={item._id} item={item}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
