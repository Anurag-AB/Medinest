import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import medicines from "../data/medicines";

/* ================= SEARCH BOX ================= */

function SearchBox({
  searchRef,
  searchValue,
  handleChange,
  applySearch,
  suggestions,
  handleSelect,
}) {
  return (
    <div
      ref={searchRef}
      className="relative flex w-full max-w-xl"
    >
      {/* INPUT */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) =>
          handleChange(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            applySearch(searchValue);
          }
        }}
        placeholder="Search medicines..."
        autoComplete="off"
        spellCheck="false"
        className="w-full border border-gray-300 px-3 py-2 text-sm rounded-l-lg outline-none focus:border-teal-500"
      />

      {/* BUTTON */}
      <button
        onClick={() =>
          applySearch(searchValue)
        }
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 text-sm rounded-r-lg transition"
      >
        Search
      </button>

      {/* SUGGESTIONS */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg mt-1 z-[9999] max-h-72 overflow-y-auto">

          {suggestions.map((item) => (
            <div
              key={item.id}
              onMouseDown={() =>
                handleSelect(item)
              }
              className="flex items-center justify-between gap-3 px-3 py-3 hover:bg-gray-100 cursor-pointer transition"
            >
              {/* LEFT */}
              <div className="flex items-center gap-3">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.name}
                  </p>

                  {item.price && (
                    <p className="text-xs text-teal-600 font-semibold">
                      ₹{item.price}
                    </p>
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <span className="text-gray-400 text-xs">
                ↵
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================= HEADER ================= */

const Header = ({
  setSearchTerm,
  cartItems,
}) => {

  const location = useLocation();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [searchValue, setSearchValue] =
    useState("");

  const [suggestions, setSuggestions] =
    useState([]);

  /* LOCATION */
  const [currentLocation, setCurrentLocation] =
    useState("Fetching location...");

  const searchRef = useRef(null);
  const menuRef = useRef(null);

  /* ================= GET LOCATION ================= */

  useEffect(() => {

    if (!navigator.geolocation) {
      setCurrentLocation(
        "Location unavailable"
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {

        const lat =
          position.coords.latitude;

        const lon =
          position.coords.longitude;

        try {

          const response =
            await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );

          const data =
            await response.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "";

          const state =
            data.address.state || "";

          setCurrentLocation(
            `${city}, ${state}`
          );

        } catch (error) {

          setCurrentLocation(
            "Location unavailable"
          );
        }
      },

      () => {
        setCurrentLocation(
          "Location denied"
        );
      }
    );

  }, []);

  /* ================= HIDE CONDITIONS ================= */

  const hideSearch =
    location.pathname === "/cart" ||
    location.pathname === "/address" ||
    location.pathname === "/orders";

  const hideCart =
    location.pathname === "/cart" ||
    location.pathname === "/address";

  /* ================= OUTSIDE CLICK ================= */

  useEffect(() => {

    const handleClickOutside = (
      event
    ) => {

      /* SEARCH */
      if (
        searchRef.current &&
        !searchRef.current.contains(
          event.target
        )
      ) {
        setSuggestions([]);
      }

      /* MENU */
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  /* ================= INPUT CHANGE ================= */

  const handleChange = (value) => {

    setSearchValue(value);

    const trimmed = value.trim();

    if (!trimmed) {

      setSuggestions([]);
      setSearchTerm("");

      return;
    }

    const filtered = medicines
      .filter((item) =>
        item.name
          .toLowerCase()
          .includes(
            trimmed.toLowerCase()
          )
      )
      .slice(0, 6);

    setSuggestions(filtered);

    setSearchTerm(trimmed);
  };

  /* ================= SEARCH ================= */

  const applySearch = (value) => {

    const trimmed = value.trim();

    if (!trimmed) return;

    setSearchValue(trimmed);

    setSearchTerm(trimmed);

    setSuggestions([]);

    setTimeout(() => {

      const productsSection =
        document.getElementById(
          "products"
        );

      if (productsSection) {

        productsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 100);
  };

  /* ================= SELECT PRODUCT ================= */

  const handleSelect = (item) => {

    setSearchValue(item.name);

    setSearchTerm(item.name);

    setSuggestions([]);

    setTimeout(() => {

      const productEl =
        document.getElementById(
          `product-${item.id}`
        );

      if (productEl) {

        productEl.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

      }

    }, 500);
  };

  /* ================= SCROLL SECTION ================= */

  const scrollToSection = (id) => {

    const el =
      document.getElementById(id);

    if (el) {

      el.scrollIntoView({
        behavior: "smooth",
      });

    }
  };

  return (
    <header className="w-full bg-white shadow-md px-3 py-2 sticky top-0 z-50">

      {/* TOP */}
      <div className="flex items-center justify-between gap-3">

        {/* LEFT */}
        <div className="flex flex-col">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-bold text-teal-600 whitespace-nowrap"
          >
            MediShop
          </Link>

          {/* LOCATION */}
          <p className="text-xs text-gray-500">
            📍 {currentLocation}
          </p>
        </div>

        {/* DESKTOP SEARCH */}
        {!hideSearch && (
          <div className="hidden sm:flex flex-1 justify-center">

            <SearchBox
              searchRef={searchRef}
              searchValue={searchValue}
              handleChange={handleChange}
              applySearch={applySearch}
              suggestions={suggestions}
              handleSelect={handleSelect}
            />

          </div>
        )}

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CART */}
          {!hideCart && (
            <Link
              to="/cart"
              className="relative"
            >
              <div className="text-2xl">
                🛒
              </div>

              {cartItems?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          )}

          {/* MENU */}
          <div
            ref={menuRef}
            className="relative"
          >

            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="text-2xl px-2"
            >
              ☰
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl border rounded-xl z-[9999] overflow-hidden">

                <Link
                  to="/"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="block px-4 py-3 hover:bg-gray-100 transition"
                >
                  🏠 Home
                </Link>

                <button
                  onClick={() => {

                    scrollToSection(
                      "categories"
                    );

                    setMenuOpen(false);

                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                >
                  📂 Categories
                </button>

                <button
                  onClick={() => {

                    scrollToSection(
                      "products"
                    );

                    setMenuOpen(false);

                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                >
                  🛍️ Products
                </button>

                <Link
                  to="/orders"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="block px-4 py-3 hover:bg-gray-100 transition"
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
        <div className="sm:hidden mt-3">

          <SearchBox
            searchRef={searchRef}
            searchValue={searchValue}
            handleChange={handleChange}
            applySearch={applySearch}
            suggestions={suggestions}
            handleSelect={handleSelect}
          />

        </div>
      )}
    </header>
  );
};

export default Header;