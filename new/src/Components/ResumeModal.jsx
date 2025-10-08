import React from "react";
import { useNavigate } from "react-router-dom";
import Roadmap from "../assets/Roadmap.png";
export default function ResumeModal({ isOpen, onClose, course }) {
  const navigate = useNavigate();

  if (!isOpen || !course) return null;

  const handleStart = () => {
    onClose(); // Close the modal first
    navigate("/dashboard"); // Navigate to dashboard page
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 backdrop-blur-sm">
      <div className="w-full max-w-3xl mx-auto rounded-t-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-8 animate-slideUp text-center relative">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-600 mb-2 flex items-center justify-center gap-2">
          🎉 <span>Welcome Aboard, {course.name || "Learner"}!</span>
        </h2>
        <p className="text-gray-700 mb-6">
          You’re now a <b>{course.title}</b> at <b>Ecstatic AI</b>.
        </p>

        {/* Tickets */}
        <p className="mb-2 text-gray-800">
          Your journey has{" "}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-sm shadow-md">
            {course.tickets}
          </span>{" "}
          tickets.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Each ticket has a chance to solve real MNC challenges.
        </p>

        {/* Replace Roadmap with Image */}
        <div className="mb-8 flex justify-center">
          <img 
            src={Roadmap} 
            alt="Learning roadmap" 
            className="max-w-full h-auto"
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={handleStart}
          className="px-8 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-md hover:from-blue-600 transition"
        >
          Let’s Get Started
        </button>
      </div>    
    </div>
  );
}
