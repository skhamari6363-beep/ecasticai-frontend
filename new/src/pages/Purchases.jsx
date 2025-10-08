import React from "react";
import { useNavigate } from "react-router-dom";

const Purchases = () => {
  const navigate = useNavigate();

  // Dummy purchases (linked with invoices by ID)
  const purchases = [
    { id: 1, course: "Product Management", date: "22nd Aug 2024", amount: "₹500", status: "Paid" },
    { id: 2, course: "Advanced UI/UX", date: "25th Aug 2024", amount: "₹1,200", status: "Paid" },
    { id: 3, course: "Data Analytics", date: "28th Aug 2024", amount: "₹2,000", status: "Cancelled" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 ml-2 sm:ml-7">
        My Purchased History
      </h2>

      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl border-2 border-blue-400 p-4 sm:p-6">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-700 text-center text-sm">
                <th className="p-3">Course Name</th>
                <th className="p-3">Purchased Date</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr
                  key={purchase.id}
                  className="border-t text-center text-sm hover:bg-gray-50"
                >
                  <td className="p-3">{purchase.course}</td>
                  <td className="p-3">{purchase.date}</td>
                  <td className="p-3">{purchase.amount}</td>
                  <td className="p-3">
                    <span
                      className={`px-6 py-1 rounded-full text-white text-xs ${
                        purchase.status === "Paid"
                          ? "bg-green-600"
                          : "bg-red-400"
                      }`}
                    >
                      {purchase.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => navigate(`/invoice/${purchase.id}`)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="space-y-4 md:hidden">
          {purchases.map((purchase) => (
            <div
              key={purchase.id}
              className="border rounded-lg p-4 shadow-sm bg-gray-50"
            >
              <h3 className="font-semibold text-gray-800">{purchase.course}</h3>
              <p className="text-sm text-gray-500">Date: {purchase.date}</p>
              <p className="text-sm text-gray-500">Amount: {purchase.amount}</p>
              <p className="mt-2">
                <span
                  className={`px-4 py-1 rounded-full text-white text-xs ${
                    purchase.status === "Paid"
                      ? "bg-green-600"
                      : "bg-red-400"
                  }`}
                >
                  {purchase.status}
                </span>
              </p>
              <button
                onClick={() => navigate(`/invoice/${purchase.id}`)}
                className="mt-3 inline-block text-blue-600 hover:underline text-sm"
              >
                View Invoice
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Purchases;
