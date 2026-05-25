import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Offers from "./components/Offers";

import MedicineDetails from "./pages/MedicineDetails";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Orders from "./pages/Orders";

function App() {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  // 🛒 CART STATE
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // 💾 sync cart
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // 📌 scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // 🎉 ORDER SUCCESS HANDLER
  useEffect(() => {
    if (location.state?.orderSuccess) {
      setShowSuccess(true);

      // clear state so it doesn’t repeat on refresh
      window.history.replaceState({}, document.title);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [location]);

  // ➕ add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const showFooter = location.pathname === "/";

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">

      {/* HEADER */}
      <Header
        setSearchTerm={setSearchTerm}
        cartItems={cartItems}
      />

      {/* 🎉 SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
          🎉 Order placed successfully!
        </div>
      )}

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>

              <section id="categories">
                <Categories
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </section>

              <section id="products">
                <Products
                  selectedCategory={selectedCategory}
                  searchTerm={searchTerm}
                  addToCart={addToCart}
                />
              </section>

              <Offers />
            </>
          }
        />

        {/* MEDICINE DETAILS */}
        <Route
          path="/medicine/:id"
          element={<MedicineDetails addToCart={addToCart} />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        {/* ADDRESS */}
        <Route
          path="/address"
          element={
            <Address
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={<Orders />}
        />

      </Routes>

      {/* FOOTER */}
      {showFooter && <Footer />}

    </div>
  );
}

export default App;