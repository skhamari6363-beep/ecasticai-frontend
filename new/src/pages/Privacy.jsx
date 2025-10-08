import React from "react";
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Privacy Policy</h1>
        <div className="bg-white shadow rounded-2xl p-6 space-y-6">
          <div>
            <h2 className="font-bold text-blue-600">1. Account Usage</h2>
            <p className="text-gray-700 mt-2">
              You must create an account to access our courses. You’re responsible for maintaining the confidentiality of your login
              information and for all activity under your account. Sharing your account or login details with others is not allowed.
            </p>
          </div> 
          <div>
            <h2 className="font-bold text-blue-600">2. Course Access and Usage Rights</h2>
            <p className="text-gray-700 mt-2">
              When you enroll in a course, you receive a limited, non-transferable license to access the content for personal,
              non-commercial use. You may not copy, redistribute, or sell course materials without written permission from Ecastic.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-blue-600">3. Payments and Refunds</h2>
            <p className="text-gray-700 mt-2">
              All payments made on Ecastic are final unless otherwise stated. Refunds may be considered only within 7 days of purchase,
              provided that less than 20% of the course has been completed. For subscriptions, cancellation must be done before the next
              billing cycle.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-blue-600">4. User Conduct</h2>
            <p className="text-gray-700 mt-2">
              You agree to use the platform ethically and respectfully. Any misuse—including harassment, spamming, unauthorized access, or
              cheating on assignments—may result in suspension or permanent termination of your account.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-blue-600">5. Content Ownership and Intellectual Property</h2>
            <p className="text-gray-700 mt-2">
              All course content, including videos, assignments, text, and visuals, is the intellectual property of Ecastic or its instructors.
              Unauthorized use, reproduction, or distribution of any material is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;