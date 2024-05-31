const Card = ({ menu }) => {
  const { price, category, image, recipe, name } = menu;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="menu Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>{category}</p>
        <div className="card-actions justify-center">
          <button className="btn  border-0 border-b-4 border-b-yellow-800 text-yellow-800 hover:bg-black hover:border-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
