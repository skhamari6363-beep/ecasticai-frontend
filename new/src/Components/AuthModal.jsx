import React, { useState } from "react";
import { X, Mail, Eye, EyeOff, User, Phone } from "lucide-react";
import robotImg from "../assets/robot.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const AuthModal = ({ mode = "login", onClose, onSuccess }) => {
  const [currentMode, setCurrentMode] = useState(mode); 
  const [showPassword, setShowPassword] = useState(false);

  // Controlled input states
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const switchMode = () => {
    setCurrentMode(currentMode === "login" ? "register" : "login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake user for demo
    const fakeUser = {
      name: currentMode === "login" ? "Moni Roy" : fullName || "New User",
      email: email || "user@example.com",
      avatar:
        currentMode === "login"
          ? "https://i.pravatar.cc/150?img=47"
          : "https://i.pravatar.cc/150?img=12",
    };
    onSuccess(fakeUser);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative flex flex-col md:flex-row w-full max-w-4xl h-full md:h-auto max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black z-10"
        >
          <X size={22} />
        </button>

        {/* LEFT Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-[#F6F9FF] p-6">
          <img
            src={robotImg}
            alt="Robot"
            className="w-40 sm:w-56 md:w-full object-contain max-h-40 md:max-h-full"
          />
        </div>

        {/* RIGHT Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 overflow-y-auto">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-extrabold text-center text-black mb-6">
              {currentMode === "login" ? "Welcome Back" : "Welcome to"}{" "}
              <span className="text-blue-600">Ecstatic AI</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Register Mode: Full Name */}
              {currentMode === "register" && (
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <User className="absolute right-3 top-[42px] text-gray-400" size={20} />
                </div>
              )}

              {/* Register Mode: Mobile Number */}
              {currentMode === "register" && (
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <div className="relative flex items-center">
                    <select
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent text-blue-600 font-medium outline-none"
                      value="+91"
                      disabled
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full py-3 pl-16 pr-10 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                    <Phone className="absolute right-3 top-3.5 text-gray-400" size={20} />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email ID
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Password (Login Only) */}
              {currentMode === "login" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Forgot Password */}
              {currentMode === "login" && (
                <div className="flex justify-end -mt-2">
                  <a href="#" className="text-sm text-blue-600 font-semibold hover:underline">
                    Forgot Password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-3 transition"
              >
                {currentMode === "login" ? "Log In" : "Create Account"}
              </button>
            </form>

            {/* Social Login */}
            {currentMode === "login" && (
              <button
                className="w-full mt-4 border rounded-full py-3 flex items-center justify-center gap-2 text-gray-800 hover:bg-gray-50 transition border-blue-300"
                onClick={() =>
                  onSuccess({
                    name: "Google User",
                    email: "google@example.com",
                    avatar: "https://i.pravatar.cc/150?img=12",
                  })
                }
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Login with Google
              </button>
            )}

            {/* Switch Mode */}
            <p className="text-sm text-gray-600 mt-6 text-center">
              {currentMode === "login"
                ? "New to Ecstatic AI? "
                : "Already have an account? "}
              <button
                onClick={switchMode}
                className="text-blue-600 font-semibold underline underline-offset-2"
              >
                {currentMode === "login" ? "Create an account" : "Log In"}
              </button>
            </p>

            {/* Social Icons (Register Only) */}
            {currentMode === "register" && (
              <div className="mt-6 text-center">
                <p className="text-gray-500 mb-2">Follow us on:</p>
                <div className="flex justify-center gap-4">
                  <FaFacebookF className="text-blue-600 w-6 h-6 cursor-pointer hover:scale-110 transition" />
                  <FaInstagram className="text-pink-500 w-6 h-6 cursor-pointer hover:scale-110 transition" />
                  <FaTwitter className="text-sky-400 w-6 h-6 cursor-pointer hover:scale-110 transition" />
                  <FaLinkedinIn className="text-blue-700 w-6 h-6 cursor-pointer hover:scale-110 transition" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
