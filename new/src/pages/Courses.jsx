import React, { useState } from "react";
import { Link } from "react-router-dom";
import Course1 from "../assets/course1.png";
import Course2 from "../assets/course2.png";
import Course3 from "../assets/course3.png";

const Courses = () => {
  const [filter, setFilter] = useState("All");

  const courses = [
    {
      id: 1,
      title: "Project Management Course",
      category: "Project Management",
      level: "Beginner",
      duration: "08 hr 12 mins",
      rating: 4.3,
      reviews: 16325,
      students: "200+ Students Enrolled",
      price: 1500,
      image: Course1,
      link: "/courses/project-management",
      description: "Improve your day-to-day skills",
    },
    {
      id: 2,
      title: "AI & ML Engineer Course",
      category: "Data Science",
      level: "Beginner",
      duration: "06 hr 3 mins",
      rating: 3.9,
      reviews: 832,
      students: "200+ Students Enrolled",
      price: 5000,
      image: Course2,
      link: "/courses/aiml",
      description: "Professionals, job seekers, and entrepreneurs.",
    },
    {
      id: 3,
      title: "Digital Marketing Course",
      category: "Digital Marketing",
      level: "Beginner",
      duration: "01 hr 2 mins",
      rating: 4.2,
      reviews: 125,
      students: "200+ Students Enrolled",
      price: 870,
      image: Course3,
      link: "/courses/digital-marketing",
      description: "Job seekers preparing for English-language interviews.",
    },
  ];

  // Filter courses
  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
   <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-10 bg-blue-50 min-h-screen">
  {/* Header */}
 <h2 className="text-2xl font-bold text-gray-900 mb-6">My Course</h2>

{/* Filters */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
  {/* Category buttons */}
  <div className="flex flex-wrap gap-3">
    {["All", "Project Management", "Data Science", "Digital Marketing"].map(
      (cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium shadow ${
            filter === cat
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      )
    )}
  </div>

  {/* Dropdowns */}
  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
    <select className="w-full sm:w-auto px-4 py-2 rounded-md border bg-white text-sm text-gray-700 shadow">
      <option>Ratings</option>
      <option>High to Low</option>
      <option>Low to High</option>
    </select>
    <select className="w-full sm:w-auto px-4 py-2 rounded-md border bg-white text-sm text-gray-700 shadow">
      <option>Duration</option>
      <option>Short to Long</option>
      <option>Long to Short</option>
    </select>
  </div>
</div>
  {/* Courses Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredCourses.map((course) => (
      <div
        key={course.id}
        className="bg-white rounded-xl p-2 shadow-md overflow-hidden hover:shadow-lg transition"
      >
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-36 sm:h-44 md:h-48 rounded-md object-cover"
          />
          <div className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span>⏱</span> {course.duration}
          </div>
        </div>
        <div className="p-5">
          <span className="text-blue-600 text-sm font-medium">
            {course.level}
          </span>
          <h3 className="font-semibold text-lg text-gray-900 mt-2 flex items-center justify-between">
            {course.title}
            <Link to={course.link}>
              <span className="text-gray-600">↗</span>
            </Link>
          </h3>
          <p className="text-gray-600 text-sm mt-1">{course.description}</p>
          <div className="flex items-center gap-1 mt-3 text-sm">
            <span className="text-blue-600 font-medium">
              {course.rating}
            </span>
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">({course.reviews})</span>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>{course.students}</span>
            <span className="text-blue-600 font-bold text-lg">
              ₹{course.price}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Courses;
