import React from "react";
import { LogOut } from "lucide-react";

const LogoutModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70   z-50">
      <div className="bg-white mb-50 rounded-xl shadow-lg p-6 w-[380px]">
        {/* Header with icon + title */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
            <LogOut size={20} />
          </div>
          <h2 className="text-lg font-bold">Logout</h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>

        {/* Buttons aligned right */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="text-gray-600 hover:underline"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition"
          >
            Yes, logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
