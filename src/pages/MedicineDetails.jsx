import { useParams, Link } from "react-router-dom";
import medicines from "../data/medicines";

const MedicineDetails = ({ addToCart }) => {
  const { id } = useParams();

  const product = medicines.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        Medicine not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pb-24">

      {/* Back */}
      <Link to="/">
        <p className="text-teal-600 mt-4 text-sm">
          ← Back to Home
        </p>
      </Link>

      {/* Image */}
      <div className="mt-4 bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-80 object-cover"
        />
      </div>

      {/* Details */}
      <div className="mt-5 bg-white rounded-2xl shadow-md p-4 sm:p-6">

        <p className="text-teal-600 text-sm font-semibold">
          {product.category}
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold mt-1">
          {product.name}
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-teal-600 mt-3">
          ₹{product.price}
        </p>

        <p className="text-gray-500 text-sm mt-3 leading-6">
          This medicine is commonly used for treatment and relief.
          Always consult a doctor before use. Store in a cool dry place
          and keep away from children.
        </p>
      </div>

      {/* Mobile Sticky Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-3 flex gap-3 sm:static sm:mt-6">

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
        >
          Add to Cart
        </button>

        <button className="hidden sm:block w-full border border-teal-500 text-teal-500 py-3 rounded-xl hover:bg-teal-50 transition">
          Buy Now
        </button>

      </div>

    </div>
  );
};

export default MedicineDetails;