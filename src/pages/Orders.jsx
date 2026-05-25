import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  return (
    <div className="w-full flex justify-center px-3 py-6">

      <div className="w-full max-w-3xl">

        <h1 className="text-2xl font-bold mb-4">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-gray-500">
            No orders placed yet.
          </p>
        ) : (
          <div className="space-y-4">

            {orders.map((order) => (
              <div
                key={order.orderId}
                className="bg-white p-4 rounded-xl shadow border"
              >

                {/* ORDER ID */}
                <p className="font-bold text-teal-600">
                  {order.orderId}
                </p>

                {/* DATE */}
                <p className="text-sm text-gray-500">
                  {order.date}
                </p>

                {/* ITEMS */}
                <p className="text-sm mt-2">
                  Items: {order.totalItems}
                </p>

                {/* ADDRESS */}
                <p className="text-sm">
                  Deliver to: {order.address?.name}, {order.address?.city}
                </p>

              </div>
            ))}

          </div>
        )}

        {/* ✅ CONTINUE SHOPPING BUTTON */}
        <div className="mt-6 flex justify-center">

          <Link to="/">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg text-sm transition"
            >
              Continue Shopping
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Orders;