import React from "react";

const TermsAndConditions = () => {
  const terms = [
    {
      id: 1,
      title: "Account Usage",
      content:
        "You must create an account to access our courses. You’re responsible for maintaining the confidentiality of your login information and for all activity under your account. Sharing your account or login details with others is not allowed.",
    },
    {
      id: 2,
      title: "Course Access and Usage Rights",
      content:
        "When you enroll in a course, you receive a limited, non-transferable license to access the content for personal, non-commercial use. You may not copy, redistribute, or sell course materials without written permission from Ecastic.",
    },
    {
      id: 3,
      title: "Payments and Refunds",
      content:
        "All payments made on Ecastic are final unless otherwise stated. Refunds may be considered only within 7 days of purchase, provided that less than 20% of the course has been completed. For subscriptions, cancellation must be done before the next billing cycle.",
    },
    {
      id: 4,
      title: "User Conduct",
      content:
        "You agree to use the platform ethically and respectfully. Any misuse—including harassment, spamming, unauthorized access, or cheating on assignments—may result in suspension or permanent termination of your account.",
    },
    {
      id: 5,
      title: "Content Ownership and Intellectual Property",
      content:
        "All course content, including videos, assignments, text, and visuals, is the intellectual property of Ecastic or its instructors. Unauthorized use, reproduction, or distribution of any material is strictly prohibited.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center py-12 px-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Terms and Conditions
        </h1>

        <div className="bg-white shadow-md rounded-xl p-8 space-y-6">
          {terms.map((term) => (
            <div key={term.id}>
              <h2 className="font-bold text-blue-600 mb-1">
                {term.id}. {term.title}
              </h2>
              <p className="text-gray-600 text-sm">{term.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default TermsAndConditions;
