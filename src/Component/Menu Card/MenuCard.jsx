const MenuCard = ({ item }) => {
  const { _id, price, category, image, recipe, name } = item;
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div>
        <img
          className="w-28 rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]"
          src={image}
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h2 className="font-cinzel text-xl text-black">
            {name}-------------------
          </h2>
          <p className="font-inter text-yellow-600 text-xl">${price}</p>
        </div>
        <p className="text-gray-400">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuCard;
