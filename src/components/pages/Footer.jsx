import { Send } from "lucide-react";
import logo from "../../assets/logo.png"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img src={logo} alt="err" className="invert-100 h-25 w-80" />
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Discover premium products at unbeatable prices.
              Fast delivery, secure payments, and top-notch customer support.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="/"
                className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="/"
                className="p-2 rounded-full bg-slate-800 hover:bg-pink-600 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="/"
                className="p-2 rounded-full bg-slate-800 hover:bg-sky-500 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="/"
                className="p-2 rounded-full bg-slate-800 hover:bg-blue-700 transition"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Shop", "Categories", "Offers", "About Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="hover:text-blue-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Customer Support
            </h3>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "FAQs",
                "Shipping Policy",
                "Returns",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="hover:text-blue-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get offers, updates and discounts.
            </p>

            <div className="flex items-center bg-slate-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 bg-transparent outline-none text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 transition">
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 ShopHub. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/" className="hover:text-white transition">
              Terms
            </a>
            <a href="/" className="hover:text-white transition">
              Privacy
            </a>
            <a href="/" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;