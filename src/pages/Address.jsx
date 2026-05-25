import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MapPicker from "./MapPicker";

const Address = ({ cartItems, setCartItems }) => {

  const navigate = useNavigate();

  const [showMap, setShowMap] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const [addresses, setAddresses] = useState(() => {
    const saved = localStorage.getItem("addresses");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [toast, setToast] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    houseNo: "",
    street: "",
    landmark: "",
    city: "",
    pincode: "",
    fullAddress: "",
  });

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const setLocationData = (data) => {
    setForm((prev) => ({
      ...prev,
      street: data.street || "",
      city: data.city || "",
      landmark: data.landmark || "",
      pincode: data.pincode || "",
      fullAddress: data.fullAddress || "",
    }));
  };

  // 💾 SAVE ADDRESS
  const saveAddress = () => {

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.houseNo.trim() ||
      !form.street.trim() ||
      !form.city.trim() ||
      !form.pincode.trim() ||
      !form.fullAddress.trim()
    ) {
      showToast("⚠️ Please fill all fields!");
      return;
    }

    const newAddress = {
      id: Date.now(),
      ...form,
    };

    setAddresses((prev) => [...prev, newAddress]);

    setForm({
      name: "",
      phone: "",
      houseNo: "",
      street: "",
      landmark: "",
      city: "",
      pincode: "",
      fullAddress: "",
    });

    setShowForm(false);
    showToast("✅ Address saved");
  };

  // 📍 SELECT ADDRESS
  const selectAddress = (id) => {
    setSelectedAddressId(id);
    showToast("📍 Address selected");
  };

  // 🛒 PLACE ORDER (UPDATED)
  const placeOrder = () => {

    if (!selectedAddressId) {
      showToast("⚠️ Please select delivery address");
      return;
    }

    const selected = addresses.find(
      (a) => a.id === selectedAddressId
    );

    const newOrder = {
      orderId: "ORD" + Date.now(),
      date: new Date().toLocaleString(),
      items: cartItems,
      totalItems: cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),
      address: selected,
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...existingOrders])
    );

    // 🧹 clear cart
    localStorage.removeItem("cartItems");
    setCartItems([]);

    showToast("🎉 Order placed successfully!");

    // 🚀 redirect to home with success state
    setTimeout(() => {
      navigate("/", { state: { orderSuccess: true } });
    }, 800);
  };

  return (
    <div className="w-full px-3 sm:px-4 py-6 flex justify-center">

      <div className="w-full max-w-2xl">

        {/* TOAST */}
        {toast && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-xl z-50">
            {toast}
          </div>
        )}

        <h1 className="text-2xl font-bold mb-4">
          Delivery Address
        </h1>

        {/* MAP */}
        {showForm && (
          <button
            onClick={() => setShowMap(true)}
            className="bg-teal-500 text-white px-4 py-2 rounded-xl"
          >
            📍 Use Current Location
          </button>
        )}

        {showMap && (
          <MapPicker
            setShowMap={setShowMap}
            setLocationData={setLocationData}
          />
        )}

        {/* FORM */}
        {showForm && (
          <div className="mt-5 bg-white p-5 rounded-2xl shadow space-y-3">

            <input
              placeholder="Name"
              className="w-full border p-2 rounded"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              className="w-full border p-2 rounded"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              placeholder="House No"
              className="w-full border p-2 rounded"
              value={form.houseNo}
              onChange={(e) =>
                setForm({ ...form, houseNo: e.target.value })
              }
            />

            <input
              placeholder="Street"
              className="w-full border p-2 rounded bg-gray-50"
              value={form.street}
              onChange={(e) =>
                setForm({ ...form, street: e.target.value })
              }
            />

            <input
              placeholder="Landmark"
              className="w-full border p-2 rounded bg-gray-50"
              value={form.landmark}
              onChange={(e) =>
                setForm({ ...form, landmark: e.target.value })
              }
            />

            <div className="grid grid-cols-2 gap-3">

              <input
                placeholder="City"
                className="border p-2 rounded bg-gray-50"
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
              />

              <input
                placeholder="Pincode"
                className="border p-2 rounded bg-gray-50"
                value={form.pincode}
                onChange={(e) =>
                  setForm({ ...form, pincode: e.target.value })
                }
              />

            </div>

            <textarea
              placeholder="Full Address"
              className="w-full border p-2 rounded bg-gray-50"
              value={form.fullAddress}
              onChange={(e) =>
                setForm({ ...form, fullAddress: e.target.value })
              }
            />

            <button
              onClick={saveAddress}
              className="w-full bg-teal-500 text-white py-2 rounded-xl"
            >
              Save Address
            </button>

          </div>
        )}

        {/* ADDRESS LIST */}
        <div className="mt-6 space-y-3">

          {addresses.map((addr) => (
            <div
              key={addr.id}
              onClick={() => selectAddress(addr.id)}
              className={`relative cursor-pointer p-4 bg-white rounded-xl shadow border flex gap-3 items-start w-full ${
                selectedAddressId === addr.id
                  ? "border-teal-500"
                  : ""
              }`}
            >

              {selectedAddressId === addr.id && (
                <div className="text-teal-600 text-xl mt-1">
                  🎯
                </div>
              )}

              <div>
                <p className="font-semibold">{addr.name}</p>
                <p className="text-sm">{addr.phone}</p>
                <p className="text-sm">
                  {addr.houseNo}, {addr.street}
                </p>
                <p className="text-sm">
                  {addr.city} - {addr.pincode}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* PLACE ORDER */}
        <div className="mt-8 bg-white p-5 rounded-2xl shadow">

          <h2 className="text-xl font-bold">
            Order Summary
          </h2>

          <p>Total Items: {cartItems.length}</p>

          <button
            onClick={placeOrder}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl"
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
};

export default Address;