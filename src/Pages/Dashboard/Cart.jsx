import Table from "../../Component/CartTable/Table";
import useCart from "../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  return (
    <div className="w-full border" >
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
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
