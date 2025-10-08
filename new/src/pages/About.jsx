import React from "react";
import { ArrowRight } from "lucide-react"; 
// import your images
import flexible from "../assets/flexible.png";
import Interactive from "../assets/interactive.png";
import Certified from "../assets/Certified.png";
import Diverse from "../assets/Diverse.png";
import shapping1 from "../assets/shapping1.png";
import shapping2 from "../assets/shapping2.png";
import shapping3 from "../assets/shapping3.png";
import cube from "../assets/cube.png";       
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png"; 
import feature3 from "../assets/feature3.png"; 

import team1 from "../assets/memb1.png";
import team2 from "../assets/memb2.png";
import team3 from "../assets/memb3.png";


import curve1 from "../assets/curve1.png";
import curve2 from "../assets/curve2.png";
    

function HomePage() {
  return (
    <>

      <section className="bg-blue-50 py-10 px-6 md:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-gray-600">
            Empower your future with expert-led online courses in technology,
            design, business, and more. Learn at your own pace with flexible,
            high-quality content crafted by industry professionals.
          </p>
        </div>

        {/* Features (image + text side by side) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <img src={flexible} alt="Flexible Learning" className="w-10 h-10" />
            <p className="font-semibold">Flexible <br /> Learning</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <img src={Interactive} alt="Interactive Support" className="w-10 h-10" />
            <p className="font-semibold">Interactive <br /> Support</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <img src={Certified} alt="Certified Courses" className="w-10 h-10" />
            <p className="font-semibold">Certified <br /> Courses</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <img src={Diverse} alt="Diverse Topics" className="w-10 h-10" />
            <p className="font-semibold">Diverse <br /> Topics</p>
          </div>
        </div>

        {/* Content (images left, text right) */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md col-span-2">
              <img
                src={shapping1}
                alt="Online learning"
                className="object-cover w-full h-[300px]" // smaller height
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={shapping2}
                alt="Student with laptop"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={shapping3}
                alt="Student writing"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">
              OUR EXPERIENCE
            </p>
            <h3 className="text-3xl font-bold leading-snug mb-4">
              Shaping careers through online learning since{" "}
              <span className="text-blue-600">2025</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Ecstatic AI is on a mission to democratize education. Since 2015,
              we've helped thousands of learners gain in-demand skills, advance
              their careers, and unlock their potential. Our courses are
              designed by industry experts and backed by real-world projects,
              helping learners build both confidence and competence.
            </p>
            <button className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2 font-semibold shadow-md transition">
              Explore Courses
              <span className="bg-white text-blue-600 rounded-full p-1 flex items-center justify-center">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#2082FF] text-white py-16 px-16 ml-5 mb-1 mr-5   md:px-20 rounded-2xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left side heading */}
          <div className="md:w-1/2">
            <p className="flex items-center gap-2 text-sm font-medium opacity-90 mb-3">
              <img src={cube} alt="cube" className="w-5 h-5" />
              Ecstatic AI Features
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              The Key Features And <br /> Benefits Of Ecstatic AI
            </h2>
          </div>

          {/* Right side stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:w-1/2">
            {/* Feature 1 */}
            <div className="border border-white rounded-xl p-8 text-center flex flex-col justify-center h-full">
              <img src={feature1} alt="Job prospects" className="mx-auto w-10 h-10 mb-4" />
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="mt-2 text-white/90 text-sm">
                of learners report improved job prospects
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border border-white rounded-xl p-8 text-center flex flex-col justify-center h-full">
              <img src={feature2} alt="Practical skills" className="mx-auto w-10 h-10 mb-4" />
              <h3 className="text-3xl font-bold">92%</h3>
              <p className="mt-2 text-white/90 text-sm">
                say they gained practical skills applicable immediately
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border border-white rounded-xl p-8 text-center flex flex-col justify-center h-full">
              <img src={feature3} alt="Completion rate" className="mx-auto w-10 h-10 mb-4" />
              <h3 className="text-3xl font-bold">90%</h3>
              <p className="mt-2 text-white/90 text-sm">
                completed courses at their own pace without feeling rushed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative curve images */}
      <img
        src={curve1}
        alt="curve decoration"
        className="absolute top-10 left-10 w-16 md:w-20 opacity-80"
      />
      <img
        src={curve2}
        alt="curve decoration"
        className="absolute bottom-10 right-10 w-16 md:w-20 opacity-80"
      />

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-2">
          Our Team
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Meet <span className="text-blue-600">our team</span>
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Member 1 */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={team1}
                alt="Alex Morgan"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">Alex Morgan</h3>
            <p className="text-gray-600 text-sm">
              Lead Instructor, AI & Data Science
            </p>
          </div>

          {/* Member 2 */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={team2}
                alt="Alex Morgan"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">Alex Morgan</h3>
            <p className="text-gray-600 text-sm">
              Lead Instructor, AI & Data Science
            </p>
          </div>

          {/* Member 3 */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={team3}
                alt="Alex Morgan"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">Alex Morgan</h3>
            <p className="text-gray-600 text-sm">
              Lead Instructor, AI & Data Science
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default HomePage;
