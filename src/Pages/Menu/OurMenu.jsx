import { useEffect, useState } from "react";
import banner from "../../assets/menu/banner3.jpg";
import Card from "../../Component/Card/Card";
const OurMenu = () => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  
  return (
    <div>
      <div>
        <img src={banner} alt="" />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {menus.slice(0, 12).map((menu) => (
            <Card key={menu._id} menu={menu}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
