import React, { useState } from "react";
import { Pencil, Camera } from "lucide-react";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "xyz@gmail.com",
    contact: "",
    address: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Profile:", profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center py-10">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-4xl p-8">
        {/* Title + Edit */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
            >
              <Pencil size={16} /> Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Profile Photo */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera size={28} className="text-gray-500" />
              )}
            </div>
            <label className="text-blue-600 mt-2 cursor-pointer text-sm font-medium">
              Upload a Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </label>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 disabled:bg-gray-100 focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                E-mail ID
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Contact Number
              </label>
              <input
                type="text"
                name="contact"
                value={profile.contact}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter your Contact Number"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 disabled:bg-gray-100 focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Address"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 disabled:bg-gray-100 focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Submit button at bottom */}
          {isEditing && (
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-12 py-2 rounded-full  transition"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
