import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import medicines from "../data/medicines";

const Header = ({ setSearchTerm, cartItems }) => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const hideSearch =
    location.pathname === "/cart" ||
    location.pathname === "/address" ||
    location.pathname === "/orders";

  const hideCart =
    location.pathname === "/cart" ||
    location.pathname === "/address";

  // 🔍 SEARCH INPUT
  const handleChange = (value) => {
    setSearchValue(value);

    if (!value.trim()) {
      setSuggestions([]);
      setSearchTerm("");
      return;
    }

    const filtered = medicines.filter((item) =>
      item.name.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(filtered);
    setSearchTerm(value);
  };

  // 🚀 APPLY SEARCH (BUTTON)
  const applySearch = (value) => {
    setSearchTerm(value);
    setSuggestions([]);

    setTimeout(() => {
      const el = document.getElementById("products");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // 🖱️ CLICK SUGGESTION
  const handleSelect = (item) => {
    setSearchValue(item.name);
    applySearch(item.name);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // 🔥 SEARCH COMPONENT
  const SearchBox = () => (
    <div className="relative flex w-full max-w-xl">

      <input
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search medicines..."
        autoComplete="off"
        spellCheck="false"
        className="w-full border px-3 py-2 text-sm rounded-l-lg outline-none"
      />

      <button
        onClick={() => applySearch(searchValue)}
        className="bg-teal-500 text-white px-4 py-2 text-sm rounded-r-lg"
      >
        Search
      </button>

      {/* ✅ SUGGESTIONS DROPDOWN FIXED */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border shadow-lg rounded-md mt-1 z-[9999] max-h-60 overflow-y-auto">

          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item)}
              className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span>{item.name}</span>

              <img
                src={item.image}
                alt={item.name}
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}

        </div>
      )}

    </div>
  );

  return (
    <header className="w-full bg-white shadow-md px-3 py-2 relative z-50">

      <div className="flex items-center justify-between gap-3">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-teal-600">
          MediShop
        </Link>

        {/* DESKTOP SEARCH */}
        {!hideSearch && (
          <div className="hidden sm:flex flex-1 justify-center">
            <SearchBox />
          </div>
        )}

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CART */}
          {!hideCart && (
            <Link to="/cart" className="relative">
              <div className="text-2xl">🛒</div>

              {cartItems?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-2 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          )}

          {/* HAMBURGER */}
          <div className="relative">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl px-2"
            >
              ☰
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg border rounded-lg z-50">

                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  🏠 Home
                </Link>

                <button
                  onClick={() => {
                    scrollToSection("categories");
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  📂 Categories
                </button>

                <button
                  onClick={() => {
                    scrollToSection("products");
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🛍️ Products
                </button>

                <Link
                  to="/orders"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  📦 Order History
                </Link>

              </div>
            )}

          </div>

        </div>
      </div>

      {/* MOBILE SEARCH */}
      {!hideSearch && (
        <div className="sm:hidden mt-2">
          <SearchBox />
        </div>
      )}

    </header>
  );
};

export default Header;