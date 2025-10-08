import React from "react";
import { Plus, Sliders, Mic, Send } from "lucide-react";
import Tool1 from '../assets/Tool1.png'
import Tool2 from '../assets/Tool2.png'
import Tool3 from '../assets/Tool3.png'
import Tool4 from '../assets/Tool4.png'
import Tool5 from '../assets/Tool5.png'
import WebLogo from '../assets/WebLogo.png'
export default function PMDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen w-full text-gray-800">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Left - Logo & Title */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg">
           <img
      src={WebLogo}
      alt="WebLogo"
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover"
    />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold">Ticket-1</h1>
            <p className="text-xs sm:text-sm text-blue-600 font-medium">
              Product Management
            </p>
          </div>
        </div>
        
        {/* Center - Tools */}
      <div className="hidden sm:flex items-center gap-3">
  <span className="text-sm font-medium">Tools :</span>
  <div className="flex gap-2">
    <img
      src={Tool1}
      alt="Tool 1"
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover"
    />
    <img
      src={Tool2}
      alt="Tool 2"
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover"
    />
    <img
      src={Tool3}
      alt="Tool 3"
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover"
    />
    <img
      src={Tool4}
      alt="Tool 4"
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover"
    />
    <img
      src={Tool5}
      alt="Tool 5"
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover"
    />
  </div>
</div>

        {/* Right - Current Streak */}
        <div className="text-right">
          <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">
            Current Streak
          </p>
          <div className="flex items-center justify-end gap-1">
            <span className="text-sm sm:text-lg font-bold text-blue-600">
              1 Day
            </span>
            <span className="text-lg">🔥</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-5 flex flex-col lg:flex-row gap-5 max-w-[1400px] mx-auto">
        {/* Left Sidebar */}
        <div className="w-full lg:w-72 flex flex-col gap-4 flex-shrink-0">
          {/* Profile Card */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-base">
                👤
              </div>
              <div>
                <h3 className="text-sm font-bold">Sandeep Khamari</h3>
                <p className="text-xs text-gray-600">
                  Product Manager Trainee
                </p>
              </div>
            </div>
          </div>

          {/* Learning Modes */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <h3 className="text-sm font-bold mb-3">Learning Modes</h3>

            {/* Intro Mode */}
            <div className="bg-blue-50 border border-blue-400 rounded-lg p-3 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div>
                  <p className="text-sm font-semibold">Intro Mode</p>
                  <p className="text-xs text-blue-600">Active</p>
                </div>
              </div>
            </div>

            {/* Work Mode */}
            <div className="bg-gray-50 rounded-lg p-3 mb-2 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div>
                  <p className="text-sm font-semibold">Work Mode</p>
                  <p className="text-xs text-gray-600">🔒 Locked</p>
                </div>
              </div>
            </div>

            {/* Analyse Mode */}
            <div className="bg-gray-50 rounded-lg p-3 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div>
                  <p className="text-sm font-semibold">Analyse Mode</p>
                  <p className="text-xs text-gray-600">🔒 Locked</p>
                </div>
              </div>
            </div>
          </div>

          {/* Start/Close Ticket */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg shadow-sm">
            Start / Close Ticket
          </button>

          {/* Keep Going */}
          <div className="bg-orange-50 rounded-xl p-7 border border-orange-100">
            <h3 className="text-sm font-bold mb-2">🔥 Keep Going!</h3>
            <p className="text-xs text-gray-800 mb-3 leading-snug">
              Just <span className="font-bold">44 tickets</span> left to become
              job-ready.
            </p>
            <div className="w-full bg-orange-200 rounded-full h-1.5 mb-1">
              <div
                className="bg-orange-500 h-1.5 rounded-full"
                style={{ width: "2.2%" }}
              ></div>
            </div>
            <p className="text-[11px] text-gray-600">
              1 of 45 tickets completed
            </p>
          </div>

          {/* Practice Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl p-7 border border-green-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-bold">💎 Real interview style</p>
                <p className="text-sm font-bold">practice.</p>
              </div>
              <div className="relative w-12 h-12">
                <svg className="transform -rotate-250 w-12 h-12">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#E5E7EB"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#3B82F6"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="126"
                    strokeDashoffset="76"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                  2/5
                </div>
              </div>
            </div>
            <button className=" bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-3 py-2 rounded-full">
              Start Practice →
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Step 1 + AI Mentor */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Step 1 */}
            <div className="flex-1 bg-white rounded-xl p-5 border border-gray-100">
              <h2 className="text-base font-bold mb-4">
                Step 1: Choose Your Context
              </h2>

              <div className="flex flex-col md:flex-row bg-[#2082FF57] p-5 rounded-sm gap-3 mb-4">
                {/* Company Select */}
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Select Company
                  </label>
                  <select className="w-full outline-none bg-white text-xs px-3 py-2 rounded-lg text-gray-500">
                    <option>Choose a company</option>
                    <option>Choose b company</option>
                  </select>
                </div>

                {/* Domain Select */}
                <div className="flex-1">
                  <label className="block text-xs font-medium text-[#565656] mb-1">
                    Choose Your Domain
                  </label>
                  <select className="w-full outline-none bg-white text-xs px-3 py-2 rounded-lg text-[#565656]">
                    <option>Choose a domain</option>
                  </select>
                </div>

                {/* Start Button */}
                <div className="flex items-end">
                  <button className="bg-[#7D7E80] text-white text-xs font-medium px-8 py-2 rounded-full">
                    Start
                  </button>
                </div>
              </div>
            </div>

            {/* AI Mentor */}
            <div className="w-full lg:w-64 bg-white rounded-xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-sm">
                  🤖
                </div>
                <h3 className="font-bold text-sm">AI Mentor</h3>
              </div>
              <p className="text-xs p-1 rounded-sm bg-gradient-to-r from-[#E2EFFF] to-[#F1E8FF] text-gray-600 mb-3 leading-snug">
                Get tips, examples & guidance for today's task
              </p>
              <button className=" bg-blue-600 text-white text-xs font-medium py-2 px-4 rounded-full">
                Get Guidance
              </button>
            </div>
          </div>

          {/* Training Message */}
          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <h2 className="text-base font-bold mb-2 text-center">
              🚀 Great! Let's begin your training for Day 5.
            </h2>
            <p className="text-xs text-gray-500 text-center mb-5">
              Step 1: Introduction to Competitive Analysis
            </p>

            <div className="flex">
              <div className="flex-shrink-0 py-13 px-10">
                <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-sm">
                  🤖
                </div>
              </div>
              <div className="flex-1 font-semibold py-13 text-sm space-y-3">
                <p>Hello! 👋</p>
                <p>
                  Welcome to the 60-Day Product Management Simulation Course —
                  your hands-on, workmode-style training to become an
                  industry-ready PM 🚀
                </p>
                <p>To get started, just type:</p>
                <p>👉 "start" — to view the full 60-day syllabus.</p>
                <p>
                  👉 "start day 1" — to begin your Day 1 training (only after
                  you've seen the syllabus).
                </p>
                <p>Let's do this 🔥</p>
                <p className="text-gray-600">
                  Click on the get guidance button of the AI mentor to move
                  forward.
                </p>
              </div>
            </div>

            {/* Chat Input */}
            <div className="w-full max-w-4xl bg-gray-100 rounded-3xl shadow-sm border border-gray-200 mt-4">
              {/* Input field */}
              <textarea
                placeholder="Ask anything"
                className="w-full bg-transparent px-7 py-2 border-none outline-none text-gray-800 placeholder-gray-400 text-base resize-none"
                rows="1"
              />

              {/* Bottom section with buttons */}
              <div className="flex px-5 py-1 items-center gap-3">
                {/* Plus Button */}
                <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-gray-700" strokeWidth={2} />
                </button>

                {/* Tools Button */}
                <button className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 hover:bg-gray-200 rounded-lg transition-colors">
                  <Sliders className="w-4 h-4 text-gray-700" strokeWidth={2} />
                  <span className="text-sm text-gray-800 font-medium">Tools</span>
                </button>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* Right Icons */}
                <div className="flex-shrink-0 flex items-center gap-2">
                  {/* Microphone Button */}
                  <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors">
                    <Mic className="w-5 h-5 text-gray-700" strokeWidth={2} />
                  </button>

                  {/* Send Button */}
                  <button className="w-9 h-9 flex items-center justify-center bg-black hover:bg-gray-800 rounded-full transition-colors">
                    <Send
                      className="w-4 h-4 text-white"
                      strokeWidth={2}
                      fill="white"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
