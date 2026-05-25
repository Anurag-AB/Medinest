import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-10">

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-xs sm:text-sm">

          {/* BRAND */}
          <div>
            <h2 className="text-teal-400 font-bold text-lg sm:text-xl">
              MediShop
            </h2>
            <p className="text-gray-400 mt-2 sm:mt-3 text-[11px] sm:text-xs leading-relaxed">
              Your trusted online pharmacy for medicines and healthcare products.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-[11px] sm:text-xs">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-white">
              Help
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-[11px] sm:text-xs">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-white">
              Legal
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-[11px] sm:text-xs">
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Refund</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-gray-400">

          <p>© {new Date().getFullYear()} MediShop</p>

          <p className="mt-2 sm:mt-0 text-teal-400">
            Made with ❤️
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;