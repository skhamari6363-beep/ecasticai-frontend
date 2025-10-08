import React from "react";
import { X } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Course Progress",
    message: "You completed Lesson 3 of Module 1: Great job! ✅",
    time: "01:34 pm",
    day: "Today",
    icon: "📘",
  },
  {
    id: 2,
    title: "Assignments & Quizzes",
    message: "Assignment 2 is due in 2 days – don’t forget to submit!",
    time: "01:34 pm",
    day: "Today",
    icon: "📝",
  },
  {
    id: 3,
    title: "Reminders",
    message: "Haven’t studied in a while? Pick up where you left off.",
    time: "01:34 pm",
    day: "Today",
    icon: "⏰",
  },
  {
    id: 4,
    title: "Achievements",
    message: "Congratulations! You’ve completed the course.",
    time: "01:34 pm",
    day: "Yesterday",
    icon: "🏅",
  },
  {
    id: 5,
    title: "Support & Help",
    message: "Our support request has been received — we’ll get back soon.",
    time: "01:34 pm",
    day: "Yesterday",
    icon: "🆘",
  },
];

const NotificationPanel = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Background overlay */}
      <div
        onClick={onClose}
        className={`flex-1 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Panel */}
      <div
        className={`w-[480px] bg-white h-full shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between bg-[#2082FF] items-center p-4 border-b">
          <h2 className="text-lg text-white font-semibold">Notification</h2>
          <button onClick={onClose} className="text-white ">
            <X size={22} />
          </button>
        </div>

        {/* Notification List */}
        <div className="p-4 space-y-4  overflow-y-auto h-[calc(100%-60px)]">
          {["Today", "Yesterday"].map((day) => (
            <div key={day}>
              <h4 className="text-sm text-gray-500 mb-2">{day}</h4>
              {notifications
                .filter((n) => n.day === day)
                .map((n) => (
                  <div
                    key={n.id}
                    className="flex items-start justify-between p-3 hover:bg-gray-50 rounded-lg transition"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{n.icon}</div>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">{n.title}</p>
                        <p className="text-gray-600 text-xs">{n.message}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{n.time}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
