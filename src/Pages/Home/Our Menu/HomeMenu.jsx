import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/Section Title/SectionTitle";
import MenuCard from "../../../Component/Menu Card/MenuCard";

const HomeMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div>
      <SectionTitle
        head={"FROM OUR MENU"}
        subHead={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4">
        {menu.splice(0, 8).map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <div className="flex justify-center mt-12 mb-16">
        <button className="hover:bg-transparent  btn bg-transparent text-blue-950 font-inter font-medium  uppercase text-center border-b-2 border-blue-950">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default HomeMenu;
