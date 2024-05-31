import { useEffect, useState } from "react";
import banner from "../../assets/shop/banner2.jpg";
import Card from "../../Component/Card/Card";

const OurShop = () => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return (
    <>
      <div>
        <img src={banner} alt="" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {menus.slice(0, 12).map((menu) => (
            <Card key={menu._id} menu={menu}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurShop;
