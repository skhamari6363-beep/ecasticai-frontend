import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I track my course progress?",
    answer:
      "You can track your progress in the 'My Courses' section, where each course shows a completion percentage and milestones.",
  },
  {
    question: "Can I resume a course from where I left off?",
    answer:
      "Yes, your progress is automatically saved. You can resume exactly where you left off when you log back in.",
  },
  {
    question: "Where can I find my assignments and due dates?",
    answer:
      "Assignments and due dates are available inside the course dashboard under the 'Assignments' tab.",
  },
  {
    question: "What happens if I miss an assignment deadline?",
    answer:
      "If you miss a deadline, you may not get full credit. However, you can still submit assignments late if the course allows.",
  },
  {
    question: "How can I contact support if I face an issue?",
    answer:
      "You can contact our support team anytime via the Help section or by emailing support@ecastica1.com.",
  },
  {
    question: "Are certificates provided after course completion?",
    answer:
      "Yes, certificates are awarded upon successful completion of each course.",
  },
  {
    question: "Can I access my courses on mobile devices?",
    answer:
      "Yes, all courses are mobile-friendly and accessible from smartphones and tablets.",
  },
  {
    question: "Will I lose my progress if I log out or switch devices?",
    answer:
      "No, your progress is automatically saved to your account. You can log in from any device and pick up exactly where you left off.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm  cursor-pointer"
          >
            <div
              className="flex justify-between items-center p-4"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {index + 1}. {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        {/* Footer aligned to left */}
        <p className="text-gray-600 text-sm mt-8 text-left">
          Still you have any questions? Contact our Team via{" "}
          <a
            href="mailto:support@ecastica1.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            support@ecastica1.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
