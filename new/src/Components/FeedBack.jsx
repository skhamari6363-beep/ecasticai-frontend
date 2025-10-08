import React, { useState } from "react";
import { X } from "lucide-react"; 

export default function FeedbackModal() {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const emojis = [
    "😤",
    "😩", 
    "😐",
    "😊", 
    "🤩", 
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[400px] p-6 relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4">
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Top Icon */}
        <div className="flex justify-center">
          <img src="/Notification.png" alt="success" className="w-24 h-24" />
        </div>

        {/* Congratulations */}
        <h2 className="text-center text-xl font-semibold mt-4 text-blue-600">
          🎉 Congratulations, Sandeep!
        </h2>
        <p className="text-center text-gray-600 text-sm mt-2">
          You’ve just completed Ticket 1. Your next ticket is now unlocked,
          keep up the momentum! 🚀
        </p>

        <hr className="my-6" />

        {/* Feedback Section */}
        <div>
          <h3 className="text-base font-medium inline-block">
            <span className="border-b-2 border-blue-600 pb-1">Give</span> us some feedback
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            How do you rate this course experience?
          </p>

          {/* Emoji Ratings */}
          <div className="flex justify-between mt-4">
            {emojis.map((emoji, i) => (
              <button
                key={i}
                className={`text-3xl transition ${
                  selected === i ? "scale-110" : "opacity-70"
                }`}
                onClick={() => setSelected(i)}
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Feedback Textbox */}
          <div className="mt-4 relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
              Tell us more
            </label>
            <textarea
              className="w-full border rounded-lg p-2 resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          {/* Send Button */}
          <button className="w-full mt-5 py-3 bg-blue-500 text-white rounded-2xl font-medium hover:bg-blue-600 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}