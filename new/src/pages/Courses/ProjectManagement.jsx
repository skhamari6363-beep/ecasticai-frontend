import React, { useState } from "react";
import { CheckCircle,  ChevronDown,  ChevronRight, Check , ArrowRight, Star } from "lucide-react";
import CourseImg from "../../assets/projectmanagement.png"; 
import StudentAvatars from "../../assets/students.png"; 
import ProjectIcon from "../../assets/projecticon.png"

const testimonials = [
  {
    name: "Nicolas Cage",
    time: "3 Days ago",
    title: "Great Product",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    rating: 5,
  },
  {
    name: "Sr. Robert Downey",
    time: "9 Days ago",
    title: "The best product in Market",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    rating: 5,
  },
];

const ratings = [
  { stars: 5, percent: 70 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 10 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 },
];

const whatYouLearn = [
  "Understand core project management terminology and concepts.",
  "Learn industry-standard methodologies like Agile, Scrum, and Waterfall.",
  "Develop skills to plan, execute, and close projects successfully.",
  "Apply best practices to manage real-world projects effectively.",
  "Improve team collaboration and stakeholder communication.",
  "Gain confidence in using project management tools and techniques.",
];

const skills = [
  "Team Management",
  "Project Management Office (PMO)",
  "Project Management Life Cycle",
  "Strategic Communication",
  "Budgeting",
  "Risk Management",
];

const faqs = [
  {
    question: "Why do I need to take the Ecastic AI online classes?",
    answer:
      "If you want to perfect your skills, taking an advanced-level course can be highly beneficial.",
  },
  {
    question: "How many sessions can I attend in a week?",
    answer:
      "You can attend as many sessions as your subscription plan allows. Typically, you get unlimited weekly access.",
  },
  {
    question: "What is included in the Subscription?",
    answer:
      "Subscriptions include access to live classes, recorded sessions, and premium resources.",
  },
  {
    question: "What does Ecastic AI do?",
    answer:
      "Ecastic AI provides top-tier online AI courses and mentorship to help you upgrade your skills.",
  },
];
const ProjectManagement = () => {
  const [activeTab, setActiveTab] = useState("details");
const [openIndex, setOpenIndex] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-[#2082FF0D]">
     <div className="bg-blue-50 py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-30 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Project Management
          </h2>
          <p className="text-gray-700 mb-4">
            If you like planning and executing projects, managing resources and
            timelines, and communicating with stakeholders this role is for you.
          </p>
          <p className="text-gray-700 mb-6">
            A <span className="font-semibold">Project Manager</span> plans,
            coordinates, and delivers projects on time and within budget. They
            manage resources, risks, and stakeholder communication to ensure
            successful project outcomes.
          </p>

          {/* Skills */}
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-yellow-500">💡</span>
              <span>Public Speaking</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-pink-500">👜</span>
              <span>Career-Oriented</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-purple-500">✨</span>
              <span>Creative Thinking</span>
            </div>
          </div>

          {/* Button */}
          <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
            Buy Now
            <ArrowRight className="ml-2" size={18} />
          </button>

          {/* Students */}
          <div className="flex items-center gap-3 mt-6">
            <img
               src={StudentAvatars}
              alt="students"
              className="h-10 w-28 object-contain"
            />
            <span className="text-gray-600 text-sm">
              Students have enrolled in this course.
            </span>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <img
             src={CourseImg}
            alt="Project Management"
            className=" shadow-lg"
          />

          {/* Salary Tag */}
          <div className="absolute top-15 -left-18 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            ₹347,247.48 median salary · <span className="font-semibold">51,096</span> jobs available
          </div>

          {/* Success Stories */}
          <div className="absolute -bottom-15 right-16 bg-white rounded-xl shadow-lg px-6 py-4 flex flex-col items-center">
            <img
             src={ProjectIcon}
            alt="Project Management"
            className=" shadow-lg"
          />
            <div className="text-blue-600 text-2xl font-bold">28K+</div>
            <div className="text-gray-600 text-sm">Success Stories</div>
          </div>
        </div>
      </div>
    </div>
    <section className="px-4 sm:px-10 lg:px-20 py-6 sm:py-9">
  <div className="bg-white rounded-xl shadow-sm flex flex-col sm:flex-row flex-wrap justify-around items-center py-6 px-4 sm:px-10 gap-6 whitespace-nowrap">
    
    {/* Item 1 */}
    <div className="flex flex-col items-center text-center px-4 sm:px-6 flex-1 min-w-[150px]">
      <h3 className="font-semibold text-lg text-gray-900">9 Course Series</h3>
      <p className="text-gray-500 text-sm mt-1">
        Earn a career credential that <br className="hidden sm:block" /> demonstrates your expertise
      </p>
    </div>

    {/* Divider */}
    <div className="hidden sm:block h-12 w-px bg-gray-300" />

    {/* Item 2 */}
    <div className="flex flex-col items-center text-center px-4 sm:px-6 flex-1 min-w-[150px]">
      <h3 className="font-semibold text-lg text-gray-900">4.7 Ratings</h3>
      <p className="text-gray-500 text-sm mt-1">429 reviews</p>
    </div>

    <div className="hidden sm:block h-12 w-px bg-gray-300" />

    {/* Item 3 */}
    <div className="flex flex-col items-center text-center px-4 sm:px-6 flex-1 min-w-[150px]">
      <h3 className="font-semibold text-lg text-gray-900">Beginner Level</h3>
      <p className="text-gray-500 text-sm mt-1">Recommended experience</p>
    </div>

    <div className="hidden sm:block h-12 w-px bg-gray-300" />

    {/* Item 4 */}
    <div className="flex flex-col items-center text-center px-4 sm:px-6 flex-1 min-w-[150px]">
      <h3 className="font-semibold text-lg text-gray-900">1 Month</h3>
      <p className="text-gray-500 text-sm mt-1">at 10 hours a week</p>
    </div>

    <div className="hidden sm:block h-12 w-px bg-gray-300" />

    {/* Item 5 */}
    <div className="flex flex-col items-center text-center px-4 sm:px-6 flex-1 min-w-[150px]">
      <h3 className="font-semibold text-lg text-gray-900">Flexible Schedule</h3>
      <p className="text-gray-500 text-sm mt-1">Learn at your own pace</p>
    </div>
  </div>
</section>


    <div className="max-w-6xl mx-auto  px-6 py-10">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {["details", "content", "testimonial"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 font-medium capitalize ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab === "details"
              ? "Course Details"
              : tab === "content"
              ? "Course Content"
              : "Customer Feedback"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
        <>
          {/* What you'll learn */}
          <section className="mb-10">
             <h2 className="text-lg font-semibold mb-4">What you'll learn</h2>
      <div className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow-sm">
        {whatYouLearn.map((point, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
              <Check className="h-4 w-4 text-blue-600" />
            </span>
            <p className="text-gray-700 text-sm">{point}</p>
          </div>
        ))}
      </div>

      {/* Skills you'll gain */}
      <h2 className="text-lg font-semibold mt-10 mb-4">Skills you'll gain</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 border border-blue-400 text-blue-600 text-sm rounded-full bg-white"
          >
            {skill}
          </span>
        ))}
      </div>
          </section>
        </>
      )}

      {activeTab === "content" && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Course Content</h2>
          <div className="divide-y rounded-full">
            {[
              "Introduction to Project Management",
              "Planning & Execution",
              "Risk & Budget Management",
              "Stakeholder Communication",
              "Capstone Project",
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between  items-center p-4 bg-white"
              >
                <p className="font-medium text-gray-700">
                  {i + 1}. {item}
                </p>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "testimonial" && (
        <section>
           <div className="max-w-4xl  px-4">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-6">Customers Feedback</h2>

        <div className="grid md:grid-cols-[40%_60%] gap-6">
          {/* Left side rating summary */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">4.8</span>
            <div className="flex text-yellow-500 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-500 mt-1 text-xs font-medium">
              Product Rating
            </p>
          </div>

          {/* Right side rating distribution */}
          <div className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-center space-y-3">
            {ratings.map((rating, i) => (
              <div key={i} className="flex items-center gap-3">
                {/* Progress bar */}
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${rating.percent}%` }}
                  ></div>
                </div>

                {/* Stars */}
                <div className="flex text-yellow-500 min-w-[80px] justify-center">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < rating.stars ? "fill-yellow-400" : "fill-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Percentage */}
                <span className="text-xs font-medium text-gray-700 w-8 text-right">
                  {rating.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mt-10 px-4">
        {/* Section Title */}
        <h2 className="text-xl font-semibold mb-6">Testimonial</h2>

        <div className="space-y-8">
          {testimonials.map((t, index) => (
            <div key={index} className="border-b pb-6">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Name + Time */}
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{t.name}</p>
                    <span className="text-xs text-gray-500">{t.time}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex text-yellow-500 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < t.rating ? "fill-yellow-400" : "fill-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Title */}
                  <p className="mt-1 text-sm font-medium">{t.title}</p>

                  {/* Review text */}
                  <p className="text-gray-600 text-sm mt-1">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </section>
      )}
    </div>
    <div className="max-w-3xl w-full m-auto mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1a3c6c] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-100 rounded-lg p-4 cursor-pointer transition bg-white/60 hover:bg-white shadow-sm"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-2">
               
                {openIndex === index ? (
                  <ChevronDown className="text-blue-500" />
                ) : (
                  <ChevronRight className="text-blue-500" />
                )}

                <h3 className="text-lg font-medium text-blue-600">
                  {faq.question}
                </h3>
              </div>

            
              {openIndex === index && (
                <p className="mt-2 ml-7 text-gray-600 text-sm">{faq.answer}</p>
               
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default ProjectManagement;


