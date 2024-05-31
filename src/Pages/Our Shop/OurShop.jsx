import { useEffect, useState } from "react";

const OurShop = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return <>
  
  </>
};

export default OurShop;
