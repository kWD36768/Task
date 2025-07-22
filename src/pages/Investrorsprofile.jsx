
import React, { useEffect, useState } from "react";
import image1 from "../assets/Stripe.jpg";
import image2 from "../assets/Madrix.jpg";
import image3 from "../assets/ai.jpg";
import image4 from "../assets/zenco.jpg";
const Investrorsprofile = () => {
    const [userData, setUserData] = useState({});
  const [editableData, setEditableData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");
    const currentUser =
      users.find((user) => user.email === currentUserEmail) ||
      users[users.length - 1];
    setUserData(currentUser);
    setEditableData(currentUser);
    setProfileImage(currentUser?.profileImage || null);
  }, []);

  const handleEditToggle = () => setIsEditing(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setEditableData((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === userData.email ? { ...user, ...editableData } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", editableData.email);
    setUserData(editableData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const portfolioData = [
    {
      name: "Stripe",
      sector: "Payments",
      description: "Payments infrastructure for the internet",
      image: image1,
    },
    {
      name: "OpenAI",
      sector: "Artificial Intelligence",
      description: "AI research and deployment company",
      image: image3,
    },
    {
      name: "Medtrix",
      sector: "Healthcare",
      description: "Digital health platform for patient care",
      image: image2,
    },
    {
      name: "Zenco",
      sector: "Payments",
      description: "Payments infrastructure for the internet",
      image: image4,
    },
  ];
  return (
 <>
 <div className="min-h-screen bg-[url('/bgimage.jpg')] bg-cover bg-center text-black p-8">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur rounded-2xl border border-white/10 p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Investor Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editableData.name || ""}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-white/20 text-black placeholder-gray-700 outline-none"
              />
            ) : (
              <p className="p-2 bg-white/10 rounded">{userData.name || "N/A"}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editableData.email || ""}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-white/20 text-black placeholder-gray-700 outline-none"
              />
            ) : (
              <p className="p-2 bg-white/10 rounded">{userData.email || "N/A"}</p>
            )}
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Bio</label>
            {isEditing ? (
              <textarea
                name="bio"
                value={editableData.bio || ""}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-white/20 text-black placeholder-gray-700 outline-none"
              />
            ) : (
              <p className="p-2 bg-white/10 rounded min-h-[60px]">{userData.bio || "No bio provided"}</p>
            )}
          </div>

          {/* Investment Focus */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Investment Focus</label>
            {isEditing ? (
              <textarea
                name="investmentFocus"
                value={editableData.investmentFocus || ""}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-white/20 text-black placeholder-gray-700 outline-none"
              />
            ) : (
              <p className="p-2 bg-white/10 rounded min-h-[60px]">
                {userData.investmentFocus || "No description provided"}
              </p>
            )}
          </div>

          {/* Profile Image */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Profile Image</label>
            {userData.profileImage ? (
              <img
                src={userData.profileImage}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border border-white/10"
              />
            ) : (
              <div className="w-32 h-32 flex items-center justify-center bg-white/10 rounded-full text-sm">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 text-center">
          {isEditing ? (
            <button
              onClick={handleSaveChanges}
              className="bg-white/20 hover:bg-white/30 text-black font-semibold px-6 py-2 rounded shadow-md backdrop-blur-sm transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-white/20 hover:bg-white/30 text-black font-semibold px-6 py-2 rounded shadow-md backdrop-blur-sm transition"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Portfolio Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Portfolio Companies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {portfolioData.map((company, idx) => (
              <div
                key={idx}
                className="bg-white/10 hover:bg-white/20 transition border border-white/10 p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-20 h-20 object-contain mb-4 sm:mb-0 sm:mr-4 rounded"
                />
                <div>
                  <h4 className="font-semibold text-black">{company.name}</h4>
                  <p className="text-sm text-gray-700">{company.sector}</p>
                  <p className="text-sm text-gray-600 mt-1">{company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Preferences */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Investment Preferences</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold mb-2">Industries of Interest</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 px-3 py-1 rounded">Fintech</span>
                <span className="bg-gray-100 px-3 py-1 rounded">Healthtech</span>
                <span className="bg-gray-100 px-3 py-1 rounded">AI</span>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Investment Stage</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 px-3 py-1 rounded">Seed</span>
                <span className="bg-gray-100 px-3 py-1 rounded">Series A</span>
                <span className="bg-gray-100 px-3 py-1 rounded">Growth</span>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Typical Check Size</p>
              <span className="bg-gray-100 px-3 py-1 rounded">$500k - $5M</span>
            </div>
            <div>
              <p className="font-semibold mb-2">Geographic Focus</p>
              <span className="bg-gray-100 px-3 py-1 rounded">Global</span>
            </div>
          </div>
        </div>
      </div>
    </div>
 </>
  )
}

export default Investrorsprofile