import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import WebLogo from "../assets/WebLogo.png";
import {
  Bell,
  ChevronDown,
  LogOut,
  User,
  BookOpen,
  ShoppingBag,
  HelpCircle,
  FileText,
  Shield,
  Menu,
  X,
} from "lucide-react";
import NotificationPanel from "../Components/NotificationPanel";

const Navbar = ({ user, onLogout, onOpenAuth }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown if mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) setDropdownOpen(false);
  }, [mobileMenuOpen]);

  // Function to close dropdown when a link/button inside it is clicked
  const handleDropdownClick = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img src={WebLogo} alt="EcstaticAI Logo" className="w-8 h-8" />
            <h1 className="text-md leading-5 font-bold">
              Ecstatic AI
              <br />
              <span className="text-gray-500 text-sm">A NextGen job lab</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            {["/", "/about", "/courses", "/contact"].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                  }
                >
                  {["Home", "About", "Courses", "Contact"][i]}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4 relative">
            {user ? (
              <>
                <button
                  onClick={() => setShowNotifications(true)}
                  className="relative p-2 rounded-full hover:bg-gray-100"
                  aria-label="Open notifications"
                  aria-expanded={showNotifications}
                >
                  <Bell size={22} className="text-gray-700" />
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {user?.notifications?.length || 5}
                  </span>
                </button>

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-2 focus:outline-none"
                    aria-label="User menu"
                    aria-expanded={dropdownOpen}
                  >
                    <img
                      src={
                        user?.avatar ||
                        "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
                      }
                      alt={user?.name || "User"}
                      className="w-10 h-10 rounded-full border"
                    />
                    <span className="font-medium hidden md:block">{user?.name || "User"}</span>
                    <ChevronDown size={18} className="text-gray-600" />
                  </button>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white border rounded-xl shadow-lg overflow-hidden z-50 transition-transform transform scale-100">
                      <NavLink
                        to="/profile"
                        onClick={handleDropdownClick}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <User size={18} /> My Profile
                      </NavLink>
                      <NavLink
                        to="/purchases"
                        onClick={handleDropdownClick}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <ShoppingBag size={18} /> My Purchase
                      </NavLink>
                      <NavLink
                        to="/my-courses"
                        onClick={handleDropdownClick}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <BookOpen size={18} /> My Course
                      </NavLink>
                      <NavLink
                        to="/faq"
                        onClick={handleDropdownClick}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <HelpCircle size={18} /> FAQ
                      </NavLink>
                      <NavLink
                        to="/terms"
                        onClick={handleDropdownClick}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <FileText size={18} /> Terms & Conditions
                      </NavLink>
                      <NavLink
                        to="/privacy"
                        onClick={handleDropdownClick}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <Shield size={18} /> Privacy Policy
                      </NavLink>
                      <button
                        onClick={() => {
                          onLogout();
                          handleDropdownClick();
                        }}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        <LogOut size={18} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={() => onOpenAuth("login")}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-full shadow-md"
              >
                Login / Register
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col p-4 space-y-4 text-gray-700">
            {["/", "/about", "/courses", "/contact"].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600"
              >
                {["Home", "About", "Courses", "Contact"][i]}
              </NavLink>
            ))}

            {user ? (
              <>
                <button
                  onClick={() => {
                    setShowNotifications(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <Bell size={18} /> Notifications
                </button>
                {[
                  { to: "/profile", icon: <User size={18} />, label: "My Profile" },
                  { to: "/purchases", icon: <ShoppingBag size={18} />, label: "My Purchase" },
                  { to: "/my-courses", icon: <BookOpen size={18} />, label: "My Course" },
                  { to: "/faq", icon: <HelpCircle size={18} />, label: "FAQ" },
                  { to: "/terms", icon: <FileText size={18} />, label: "Terms & Conditions" },
                  { to: "/privacy", icon: <Shield size={18} />, label: "Privacy Policy" },
                ].map((item, idx) => (
                  <NavLink
                    key={idx}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    {item.icon} {item.label}
                  </NavLink>
                ))}
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-red-600"
                >
                  <LogOut size={18} /> Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  onOpenAuth("login");
                  setMobileMenuOpen(false);
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-full shadow-md"
              >
                Login / Register
              </button>
            )}
          </div>
        </div>
      </nav>

      <NotificationPanel
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
    </>
  );
};

export default Navbar;
