import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10 min-h-screen">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10">
        Shopping Cart
      </h1>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-md p-8 text-center">

          <h2 className="text-xl font-semibold mb-4">
            Your cart is empty
          </h2>

          <Link to="/">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition-all">
              Continue Shopping
            </button>
          </Link>

        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">

          {/* LEFT SIDE - CART ITEMS */}
          <div className="lg:col-span-2 space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-4 md:p-5"
              >

                <div className="flex gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <p className="text-sm text-teal-500 font-semibold">
                      {item.category}
                    </p>

                    <h2 className="text-sm md:text-2xl font-bold mt-1 line-clamp-2">
                      {item.name}
                    </h2>

                    <p className="text-teal-600 font-bold mt-2">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-5">

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-400 hover:text-white transition"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 bg-teal-500 text-white rounded-full hover:bg-teal-700 transition"
                    >
                      +
                    </button>

                  </div>

                  <p className="font-bold text-lg">
                    ₹{item.price * item.quantity}
                  </p>

                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-full mt-4 border border-red-500 text-red-500 bg-white py-2 rounded-xl shadow-sm transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-md hover:scale-[1.02]"
                >
                  Remove Item
                </button>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="bg-white rounded-2xl shadow-md p-5 lg:sticky lg:top-24 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Price Details
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Total Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span className="text-teal-600">
                  ₹{totalPrice}
                </span>
              </div>

            </div>

            {/* CHECKOUT → ADDRESS PAGE */}
            <Link to="/address">
              <button className="w-full bg-teal-500 text-white py-3 mt-6 rounded-xl font-semibold transition-all duration-300 hover:bg-teal-700 hover:scale-[1.02]">
                Checkout
              </button>
            </Link>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;