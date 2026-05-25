import { Link } from "react-router-dom";

const ProductCard = ({
  item,
  addToCart,
}) => {

  const handleAddToCart = (e) => {

    e.preventDefault();

    addToCart(item);
  };

  return (

    <Link to={`/medicine/${item.id}`}>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer h-full flex flex-col">

        <img
          src={item.image}
          alt={item.name}
          className="h-32 sm:h-40 md:h-52 w-full object-cover"
        />

        <div className="p-3 md:p-5 flex flex-col flex-1">

          <p className="text-[11px] md:text-sm text-teal-500 font-semibold">

            {item.category}

          </p>

          <h2 className="text-sm md:text-xl font-semibold mt-1 line-clamp-2 min-h-[40px] md:min-h-[60px]">

            {item.name}

          </h2>

          <p className="text-sm md:text-lg text-teal-600 font-bold mt-2 md:mt-3">

            ₹{item.price}

          </p>

          <div className="flex flex-col gap-2 mt-4">

            <button
              onClick={handleAddToCart}
              className="w-full bg-teal-500 text-white py-2 rounded-xl hover:bg-teal-600 text-xs md:text-base transition"
            >
              Add To Cart
            </button>

            <button className="w-full border border-teal-500 text-teal-500 py-2 rounded-xl hover:bg-teal-50 text-xs md:text-base transition">

              View Details

            </button>

          </div>

        </div>

      </div>

    </Link>
  );
};

export default ProductCard;