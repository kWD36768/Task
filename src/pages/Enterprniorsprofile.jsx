import React, { useEffect, useState } from "react";
const Enterprniorsprofile = () => {
  const [userData, setUserData] = useState({});
  const [editableData, setEditableData] = useState({
    bio: "Experienced entrepreneur passionate about innovation and technology.",
    startupDescription:
      "Our startup develops AI-powered solutions to streamline small business operations.",
    fundingNeed:
      "Seeking $500,000 to expand product development and scale marketing efforts.",
    pitchDeck: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [pitchDeckFile, setPitchDeckFile] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");
    const currentUser =
      users.find((user) => user.email === currentUserEmail) || users[users.length - 1];

    if (currentUser) {
      setUserData(currentUser);
      setEditableData((prev) => ({
        ...prev,
        ...currentUser,
        bio: currentUser.bio || prev.bio,
        startupDescription: currentUser.startupDescription || prev.startupDescription,
        fundingNeed: currentUser.fundingNeed || prev.fundingNeed,
        pitchDeck: currentUser.pitchDeck || null,
      }));
      setProfileImage(currentUser.profileImage || null);
      if (currentUser.pitchDeck) {
        setPitchDeckFile({ name: "Uploaded Pitch Deck" });
      }
    }
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

  const handlePitchDeckChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditableData((prev) => ({ ...prev, pitchDeck: reader.result }));
        setPitchDeckFile(file);
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
  return (
  <>
  
  <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen p-6 sm:p-10 w-[900px] ">
      <div className="bg-gray-100/30 backdrop-blur w-full max-w-6xl mx-auto p-6 sm:p-8 rounded-2xl shadow-lg text-gray-900">
        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6">
          Entrepreneur Profile
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
          <div className="flex-1 space-y-6 max-w-full md:max-w-md">
            {["name", "email", "bio", "startupDescription", "fundingNeed"].map((field) => (
              <div key={field}>
                <label className="block text-gray-800 font-semibold mb-1 capitalize">
                  {field === "startupDescription"
                    ? "Startup Description"
                    : field === "fundingNeed"
                    ? "Funding Need"
                    : field}
                </label>
                {field === "bio" || field === "startupDescription" || field === "fundingNeed" ? (
                  <textarea
                    name={field}
                    rows={field === "fundingNeed" ? 3 : 4}
                    value={editableData[field]}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    className={`w-full p-2 rounded resize-none ${
                      isEditing
                        ? "bg-white/50 border border-gray-300 text-gray-800"
                        : "bg-white/20 text-gray-800"
                    }`}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={editableData[field] || ""}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    className={`w-full p-2 rounded ${
                      isEditing
                        ? "bg-white/50 border border-gray-300 text-gray-800"
                        : "bg-white/20 text-gray-800"
                    }`}
                  />
                )}
              </div>
            ))}

            <div>
              <label className="block text-gray-800 font-semibold mb-1">Pitch Deck</label>
              {isEditing ? (
                <>
                  <input
                    type="file"
                    accept=".pdf,.ppt,.pptx"
                    onChange={handlePitchDeckChange}
                    className="w-full text-gray-800"
                  />
                  {pitchDeckFile && (
                    <p className="mt-2 text-sm text-gray-700">
                      Selected file: {pitchDeckFile.name}
                    </p>
                  )}
                </>
              ) : editableData.pitchDeck ? (
                <a
                  href={editableData.pitchDeck}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  View Uploaded Pitch Deck
                </a>
              ) : (
                <p className="text-gray-600">No pitch deck uploaded</p>
              )}
            </div>
          </div>

          {/* Right column - Profile Image */}
          <div className="flex flex-col items-center max-w-xs mx-auto md:mx-0">
            <label className="block text-gray-800 font-semibold mb-4">Profile Image</label>
            <div className="w-40 h-40 rounded-full border border-white/10 overflow-hidden mb-4">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-white/20 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm text-gray-800"
              />
            )}
          </div>
        </div>

   <div className="mt-10 text-center">
  {isEditing ? (
    <button
      onClick={handleSaveChanges}
      className="bg-white/20 hover:bg-white/30 text-black font-semibold px-6 py-2 rounded-full shadow-lg backdrop-blur transition"
    >
      Save Changes
    </button>
  ) : (
    <button
      onClick={handleEditToggle}
      className="bg-white/20 hover:bg-white/30 text-black font-semibold px-6 py-2 rounded-full shadow-lg backdrop-blur transition"
    >
      Edit Profile
    </button>
  )}
</div>
      </div>
    </div>
  </>
  )
}

export default Enterprniorsprofile