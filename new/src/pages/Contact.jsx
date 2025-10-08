import React from "react";
import ContactUs from "../assets/ContactUS.png";

function Contact() {
  return (
   <div className="flex justify-center bg-gray-100 py-12 px-4">
  {/* Main container */}
  <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6 p-6 bg-white rounded-xl shadow-lg">
    
    {/* Form Card */}
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-2">Contact Us</h2>
        <p className="text-gray-500 mb-4">Our friendly team would love to hear from you.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col mb-3">
          <label className="mb-1 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="mb-1 text-gray-700 font-medium">Phone</label>
          <input
            type="tel"
            placeholder="+91 9876895890"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="mb-1 text-gray-700 font-medium">Message</label>
          <textarea
            placeholder="Write your message here"
            rows="3"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center mb-3">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-500 text-sm">
            You agree to our <span className="underline">privacy policy</span>.
          </label>
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 w-full transition rounded-full">
        Send message
      </button>
    </div>

    {/* Image */}
    <div className="flex-1 h-64 md:h-auto">
      <img
        src={ContactUs}
        alt="Contact"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>

  );
}

export default Contact;
