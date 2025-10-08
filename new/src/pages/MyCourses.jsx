import React, { useState } from "react";
import { Star } from "lucide-react";
import ResumeModal from "../Components/ResumeModal"; 

const courses = [
  {
    id: 1,
    title: "Product Management",
    desc: "Improve your day-to-day skills",
    img: "../assets/course1.png",
    rating: 4.3,
    reviews: "16,325",
    progress: 82,
    tickets: 45, 
  },
  {
    id: 2,
    title: "AI & ML Engineer Course",
    desc: "Improve your day-to-day skills",
    img: "/images/ai-ml.jpg",
    rating: 4.3,
    reviews: "16,325",
    progress: 30,
    tickets: 45, 
  },
];

export default function MyLearnings() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-[#F3F8FF] flex flex-col md:flex-row p-4 md:p-6 gap-6 items-start">
      {/* Left navigation card */}
      <aside className="bg-white rounded-xl shadow-md p-5 w-full md:w-60 text-base h-[70vh]">
        <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
          <button className="text-black border-l-4 border-black pl-2">
            Courses ({courses.length})
          </button>
          <button>Resources</button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-white rounded-xl shadow-md p-5">
        <h1 className="text-xl md:text-2xl font-bold mb-5">My Learnings</h1>

        {/* Toggle buttons */}
        <div className="mb-5 flex gap-4">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-base font-medium">
            In Progress
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-700 text-base font-medium">
            Completed
          </button>
        </div>

        {/* Course cards */}
        <div className="space-y-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 p-4"
            >
              {/* Thumbnail */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full md:w-44 h-28 object-cover rounded-lg"
              />

              {/* Details */}
              <div className="flex-1 mt-3 md:mt-0 md:ml-5">
                <p className="text-sm text-gray-500">Course</p>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-gray-600 text-sm">{course.desc}</p>

                <div className="flex items-center mt-2 text-sm">
                  <span className="text-blue-600 font-semibold">
                    {course.rating}
                  </span>
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400 mx-1"
                  />
                  <span className="text-gray-500">({course.reviews})</span>
                </div>

                {/* Progress bar */}
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-500 mt-1">
                  {course.progress}% Remaining
                </p>
              </div>

              {/* Action */}
              <button
                onClick={() => setSelectedCourse(course)} // ✅ open modal with course
                className="mt-4 md:mt-0 md:ml-auto px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                Resume Course
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
      />
    </div>
  );
}
