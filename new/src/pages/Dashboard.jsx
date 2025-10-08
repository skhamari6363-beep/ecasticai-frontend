import React from "react";
import { Lock, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function PMDashboard() {
     const navigate = useNavigate();

 
  const handleStart = () => {
    
    navigate("/second-dashboard"); // Navigate to dashboard page
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Hello Sandeep, Welcome Back! 👋
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Today you will continue your ticket 2 of the product management
              journey.
            </p>
          </div>
          <div className="text-left md:text-right mt-3 md:mt-0">
            <p className="text-gray-600 text-xs md:text-sm mb-1">Current Streak</p>
            <p className="text-2xl md:text-3xl font-bold text-blue-600">
              3 Days 🔥
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Left Sidebar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4">
            {/* Course Levels */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Course Levels</h2>

              {/* Level 1 */}
              <div className="border-2 border-blue-500 rounded-xl p-3 mb-3 bg-blue-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        Basics + Assignments
                      </h3>
                      <p className="text-xs text-gray-600">12/25 Completed</p>
                    </div>
                  </div>
                  <div className="relative w-10 h-10">
                    <svg className="transform -rotate-90 w-10 h-10">
                      <circle cx="20" cy="20" r="16" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 16}`}
                        strokeDashoffset={`${2 * Math.PI * 16 * (1 - 0.65)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-900">
                      65%
                    </span>
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="border-2 border-gray-200 rounded-xl p-3 bg-gray-50 opacity-60">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-500 text-sm">
                        Domain Projects
                      </h3>
                      <p className="text-xs text-gray-400">0/20 Completed</p>
                    </div>
                  </div>
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-2 text-center">
                Complete Level 1 to unlock Level 2
              </p>
            </div>

            {/* Career Readiness */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🎯</span>
                <h2 className="text-lg font-bold text-gray-900">
                  Career Readiness
                </h2>
              </div>

              <div className="flex justify-center mb-3">
                <div className="relative w-24 h-24">
                  <svg className="transform -rotate-90 w-24 h-24">
                    <circle cx="48" cy="48" r="42" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 42}`}
                      strokeDashoffset={`${2 * Math.PI * 42 * (1 - 0.65)}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-900">
                    65%
                  </span>
                </div>
              </div>

              <div className="text-center">
                <p className="font-bold text-gray-900 text-sm mb-1">
                  Ready for MNC roles
                </p>
                <p className="text-xs text-gray-500">2 more projects to go!</p>
              </div>
            </div>

            {/* Your Stats */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">📊</span>
                <h2 className="text-lg font-bold text-gray-900">Your Stats</h2>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time Invested</span>
                  <span className="font-bold text-gray-900">24h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Assignments Done</span>
                  <span className="font-bold text-gray-900">8/15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects Started</span>
                  <span className="font-bold text-gray-900">0/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-4">
            {/* Today's Task + AI Mentor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Today's Task */}
              <div className="col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow relative overflow-hidden">
                <div className="absolute top-3 right-3 opacity-20">
                  <Clock className="w-16 h-16" />
                </div>
                <h2 className="text-xl font-bold mb-3">Today's Task</h2>
                <h3 className="text-lg font-semibold mb-2">Ticket-1</h3>
                <p className="text-sm md:text-base mb-2">
                  Write a PRD for Amazon's new grocery delivery features.
                </p>
                <p className="text-xs md:text-sm mb-4 opacity-90">
                  Master the fundamentals of product management.
                </p>
                <button onClick={handleStart} className="bg-white text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition text-sm">
                  ▶ Start Task
                </button>
              </div>

              {/* AI Mentor */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 shadow-sm border border-purple-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-lg">🤖</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">AI Mentor</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Great job on completing the PRD! Your next challenge involves
                  user research - a critical PM skill.
                </p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm">
                  Ask a question →
                </button>
              </div>
            </div>

            {/* Level 1: Basics + Assignments */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                Level 1: Basics + Assignments
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Master the fundamentals of product management
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Ticket 1 */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span>📗</span>
                    <h4 className="font-bold text-gray-900 text-sm">Ticket 1</h4>
                  </div>
                  <p className="text-md  text-gray-700 mb-2">
                    Introduction to Product Management
                  </p>
                  <div className="flex items-center gap-1 text-gray-600 mb-2 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>30min</span>
                  </div>
                  <button className="w-full bg-green-500 text-white py-1.5 rounded-full font-semibold hover:bg-green-600 transition text-xs">
                    Review
                  </button>
                </div>

                {/* Ticket 2 */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span>📕</span>
                    <h4 className="font-bold text-gray-900 text-sm">Ticket 2</h4>
                  </div>
                  <p className="text-md text-gray-700 mb-2">
                    Understanding User Needs
                  </p>
                  <div className="flex items-center gap-1 text-gray-600 mb-2 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>30min</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-1.5 rounded-full font-semibold hover:bg-blue-700 transition text-xs">
                    Resume
                  </button>
                </div>

                {/* Locked Tickets */}
                {[3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    className="bg-gray-100 border-2 border-gray-200 rounded-xl p-3 opacity-75"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-4 h-4 text-gray-500" />
                      <h4 className="font-bold text-gray-600 text-sm">
                        Ticket {num}
                      </h4>
                    </div>
                    <p className="text-md text-gray-600 mb-2">
                      Competitive Analysis Exercise
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 mb-2 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>30min</span>
                    </div>
                    <button className="w-full bg-gray-400 text-white py-1.5 rounded-full font-semibold cursor-not-allowed text-xs">
                      Locked
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
