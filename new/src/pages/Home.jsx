import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Box, Typography } from "@mui/material";
import { styled , keyframes } from "@mui/system";
import arcImage from "../assets/arc.png";
import graduationCap from "../assets/GraduationCap.png";
// import circlesImage from "../assets/Circle.png";
import GoogleLogo from "../assets/Google.png";
import AmazonLogo from "../assets/Amazon.png";
import MyntraLogo from "../assets/myntra.png";
import FlipkartLogo from "../assets/Flipkart.png";
import AppleLogo from "../assets/Apple.png";
import MicrosoftLogo from "../assets/Microsoft.png";
import Course1 from "../assets/Course1.png"
import Course2 from "../assets/Course2.png"
import Course3 from "../assets/Course3.png"
import Frame1 from "../assets/Frame1.png"
import Frame2 from "../assets/Frame2.png"
import Frame3 from "../assets/Frame3.png"
import Frame4 from "../assets/Frame4.png"

import WebLogo from "../assets/WebLogo.png";
import NotionLogo from "../assets/notion.png";
import JiraLogo from "../assets/jira.png";
import TrelloLogo from "../assets/trello.png";
import PowerBiLogo from "../assets/powerbi.png";
import FigmaLogo from "../assets/figma.png";
import ChartLogo from "../assets/chart.png";
import Courses from "./Courses";
const testimonials = [
  {
    text: "I took this course 2 years ago, and got a job as a data analyst before I even finished it.",
    name: "Chetan Raj",
    location: "Challakere, Karnataka",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The mentorship and resources provided were excellent. I transitioned into AI with confidence.",
    name: "Ananya Sharma",
    location: "Bengaluru, Karnataka",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "I loved the practical projects. They helped me crack interviews easily.",
    name: "Rohit Kumar",
    location: "Pune, Maharashtra",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    text: "The instructors are very supportive and explain everything clearly.",
    name: "Priya Patel",
    location: "Ahmedabad, Gujarat",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "I joined as a beginner and now I’m working on real AI projects at my company.",
    name: "Arjun Mehta",
    location: "Delhi, India",
    img: "https://randomuser.me/api/portraits/men/73.jpg",
  },
  {
    text: "This course is amazing! The content is industry-relevant and easy to follow.",
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    img: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

 const benefits = [
    {
      title: "AI-Powered Mentorship",
      desc: "ChatGPT-based custom GPTs act as your personal mentors, guiding you through real workplace scenarios",
      icon: Frame1,
      color: "border-blue-500",
    },
    {
      title: "Portfolio Projects",
      desc: "Build real portfolio projects that showcase your skills to potential employers",
      icon: Frame2,
      color: "border-blue-500", 
    },
    {
      title: "Practical Assessments",
      desc: "Get evaluated on real work outputs, not theoretical knowledge",
      icon: Frame3,
      color: "border-blue-500", 
    },
    {
      title: "Real-time Feedback",
      desc: "Receive instant feedback on your decisions and work quality",
      icon: Frame4,
      color: "border-blue-500", 
    },
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
const spin = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

// ===== Styled Components =====
const Container = styled(Box)({
  position: "relative",
  width: 500,
  height: 500,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Circle = styled(Box)(({ size, filled }) => ({
  position: "absolute",
  borderRadius: "50%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: size,
  height: size,
  border: filled ? "none" : "2px solid rgba(0,200,200,0.3)",
  background: filled
    ? "radial-gradient(circle, #e6f5ff, #cce7f0)"
    : "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: filled ? "0px 6px 15px rgba(0,0,0,0.1)" : "none",
  zIndex: filled ? 10 : "auto",
}));

const InnerWhiteCircle = styled(Box)({
  width: 120,
  height: 120,
  borderRadius: "50%",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Orbit = styled(Box)(({ duration }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  animation: `${spin} ${duration}s linear infinite`,
}));

const Item = styled(Box)({
  position: "absolute",
  width: 70,
  height: 70,
  borderRadius: "50%",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
  "& img": {
    maxWidth: "60%",
    maxHeight: "60%",
  },
});

export default function HeroSection() {
    
 const [openIndex, setOpenIndex] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    
   <>
    <section className="relative flex flex-col items-center min-h-screen overflow-hidden bg-gradient-to-t from-blue-50 via-gray-50 to-blue-50 px-4 py-10">
  {/* Top Content */}
  <div className="relative z-10 text-center max-w-2xl">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-gray-900">
      Level Up Your{" "}
      <span className="relative inline-block">
        {/* Graduation Cap Above Career */}
       <span className="absolute -top-8 left-1/2 translate-x-9 ">
  <img
    src={graduationCap}
    alt="Graduation Cap"
    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rotate-12"
  />
</span>
        <span className="text-blue-600">Career</span>
      </span>
      <br />
      with <span className="text-blue-600">Real-World Skills</span>
    </h1>

    <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4">
      From classroom to career, Learn in a fun way.
    </p>

    <button className="inline-flex items-center mt-6 gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm sm:text-base shadow-md hover:bg-blue-700 transition">
      Start Learning Today
      <span className="bg-white text-blue-600 rounded-full p-1">
        <ArrowRight size={16} />
      </span>
    </button>
  </div>

  {/* Arc Image */}
  <div className="relative flex justify-center items-center mt-10 w-full px-4">
    <img
      src={arcImage}
      alt="Learning Path"
      className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl h-auto object-contain"
    />
  </div>
</section>

    <section className="w-full bg-[#e5ebf7] py-16">
  <div className="max-w-5xl bg-white mx-auto p-6 rounded-xl">
 <h2 className="text-center text-2xl font-bold mb-12">
  <span className="bg-gradient-to-r from-[#1A1818] to-[#2082FF] bg-clip-text text-transparent">
    What Will You Get?
  </span>
</h2>

     <div className="grid md:grid-cols-2 gap-6">
      {benefits.map((item, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-xl shadow-md p-5 flex items-start border-l-4 ${item.color}`}
        >
          {/* Icon inside circle */}
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f0f6ff]">
              <img src={item.icon} alt={item.title} className="w-6 h-6" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-semibold text-md text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="w-full bg-[#e5ebf7] py-12">
  <div className="max-w-6xl mx-auto px-6 text-center overflow-hidden">
    {/* Title */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8">
      <span className="bg-gradient-to-r from-[#1A1818] to-[#2082FF] bg-clip-text text-transparent">
        Train Like You Work at Top Companies
      </span>
    </h2>

    {/* Logo Slider */}
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center gap-10 animate-scroll">
        {/* Duplicate logos for infinite effect */}
        {[GoogleLogo, AmazonLogo, MyntraLogo, FlipkartLogo, AppleLogo, MicrosoftLogo,
          GoogleLogo, AmazonLogo, MyntraLogo, FlipkartLogo, AppleLogo, MicrosoftLogo
        ].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Company Logo"
            className="h-8 sm:h-10 md:h-12 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  </div>
</section>


    <section className="w-full bg-[#e5ebf7] flex justify-center py-15">
      <div className="w-[1100px] h-[600px] rounded-2xl flex flex-col items-center justify-start p-6 bg-white shadow-md relative overflow-hidden">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-6 bg-gradient-to-r from-[#1A1818] to-[#2082FF] bg-clip-text text-transparent">
          Master professional Tools
        </h2>
<Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#fff",
      }}
    >
      <Container>
        {/* Outer and Inner Border Circles */}
        <Circle size={500} />
        <Circle size={350} />

        {/* Center Gradient Circle */}
        <Circle size={200} filled>
          <InnerWhiteCircle>
            <img
              src={WebLogo}
              alt="WebLogo"
              style={{ width: 50, marginBottom: 10 }}
            />
            <Typography variant="body2" fontWeight="bold">
              Ecastic AI
            </Typography>
          </InnerWhiteCircle>
        </Circle>

        {/* Outer orbit (3 logos) */}
        <Orbit duration={25}>
          <Item sx={{ top: "-5%", left: "45%" }}>
            <img
              src={NotionLogo}
              alt="Notion"
            />
          </Item>
          <Item sx={{ top: "45%", right: "-5%" }}>
            <img
              src={JiraLogo}
              alt="Jira"
            />
          </Item>
          <Item sx={{ bottom: "-5%", left: "45%" }}>
            <img
              src={FigmaLogo}
              alt="Figma"
            />
          </Item>
        </Orbit>

        {/* Inner orbit (3 logos) */}
        <Orbit duration={18} sx={{ width: 350, height: 350 }}>
          <Item sx={{ top: "-5%", left: "40%" }}>
            <img
              src={ChartLogo}
              alt="Chart"
            />
          </Item>
          <Item sx={{ right: "-5%", top: "40%" }}>
            <img
              src={TrelloLogo}
              alt="TrelloLogo"
            />
          </Item>
          <Item sx={{ bottom: "-5%", left: "40%" }}>
            <img
              src={PowerBiLogo}
              alt="PowerBi"
            />
          </Item>
        </Orbit>
      </Container>
    </Box>
      </div>
    </section>
    <section className="w-full bg-[#EAF3FE] py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
 <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">
  Discover Our{" "}
  <span className="bg-gradient-to-r from-[#1A1818] to-[#2082FF] bg-clip-text text-transparent">
    Popular Courses
  </span>
</h2>


    {/* Cards Grid */}
    <div className="grid md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-xl p-2 shadow-md overflow-hidden hover:shadow-lg transition">
        {/* Image with time badge */}
        <div className="relative">
          <img
            src={Course1}
            alt="Product Management"
            className="w-full h-48 rounded-md object-cover"
          />
          <div className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span>⏱</span> 08 hr 12 mins
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-blue-600 text-sm font-medium">Beginner</span>
          <h3 className="font-semibold text-lg text-gray-900 mt-2 flex items-center justify-between">
            Product Management Course
             <Link
            to={"/courses/project-management"}
            >
             <span className="text-gray-600">↗</span>
            </Link>
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Improve your day-to-day skills
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-3 text-sm">
            <span className="text-blue-600 font-medium">4.3</span>
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">(16,325)</span>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>200+ Students Enrolled</span>
            <span className="text-blue-600 font-bold text-lg">₹1500</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        <div className="relative p-2">
          <img
            src={Course2}
            alt="AI & ML"
            className="w-full h-48 rounded-md object-cover"
          />
          <div className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span>⏱</span> 06 hr 3 mins
          </div>
        </div>
        <div className="p-5">
          <span className="text-blue-600 text-sm font-medium">Beginner</span>
          <h3 className="font-semibold text-lg text-gray-900 mt-2 flex items-center justify-between">
            AI & ML Engineer Course
            <Link
            to={"/courses/aiml"}
            >
             <span className="text-gray-600">↗</span>
            </Link>
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Professionals, job seekers, and entrepreneurs.
          </p>
          <div className="flex items-center gap-1 mt-3 text-sm">
            <span className="text-blue-600 font-medium">3.9</span>
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">(832)</span>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>200+ Students Enrolled</span>
            <span className="text-blue-600 font-bold text-lg">₹5000</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        <div className="relative p-2">
          <img
            src={Course3}
            alt="Digital Marketing"
            className="w-full h-48 rounded-md object-cover"
          />
          <div className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span>⏱</span> 01 hr 2 mins
          </div>
        </div>
        <div className="p-5">
          <span className="text-blue-600 text-sm font-medium">Beginner</span>
          <h3 className="font-semibold text-lg text-gray-900 mt-2 flex items-center justify-between">
            Digital Marketing Course
           <Link
            to={"/courses/digital-marketing"}
            >
             <span className="text-gray-600">↗</span>
            </Link>
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Job seekers preparing for English-language interviews.
          </p>
          <div className="flex items-center gap-1 mt-3 text-sm">
            <span className="text-blue-600 font-medium">4.2</span>
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">(125)</span>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>200+ Students Enrolled</span>
            <span className="text-blue-600 font-bold text-lg">₹870</span>
          </div>
        </div>
      </div>
    </div>

    {/* Button */}
   <div className="flex justify-center mt-10">
            <Link
              to="/courses"
              className="inline-flex items-center mt-4 gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm shadow-md hover:bg-blue-700 transition"
            >
              View More Courses
              <span className="bg-white text-blue-600 rounded-full p-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
  </div>
</section>

<section className="w-full bg-[#2082FF] py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
   <h2 className="text-center text-2xl font-bold text-white mb-12">
  What customers are saying about Ecstatic AI Course
 
</h2>


   <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-[#2082FF] border border-white rounded-xl p-2 text-white"
        >
          <p className="mb-6">{t.text}</p>

          {/* User info */}
          <div className="flex items-center gap-3">
            <img
              src={t.img}
              alt={t.name}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm opacity-80">{t.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
   <div className="bg-[#f7fbff] min-h-screen flex justify-center items-center px-4">
      <div className="max-w-3xl w-full">
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

   </>
    
  );
}
