import { useState, useEffect } from "react";
import { GetHeroOurteam, HeroOurteamPost } from "../../Api/HeroOurteam";
import { fileToBase64 } from "../../Api/Convertbase64";

const HeroOurteam = () => {
  const [heroData, setHeroData] = useState({
    maintitle: "",
    teamMember: [
      {
        img: "",
        name: "", 
        experience: ""
      }
    ]
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroData = async () => {
    try {
      setLoading(true);
      const response = await GetHeroOurteam();
      if (response && response.heroOurTeam) {
        setHeroData(response.heroOurTeam);
      }
    } catch (err) {
      setError("Failed to fetch team data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  const handleInputChange = (e) => {
    setHeroData({
      ...heroData,
      [e.target.name]: e.target.value
    });
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...heroData.teamMember];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value
    };
    
    setHeroData({
      ...heroData,
      teamMember: updatedMembers
    });
  };

  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handleMemberChange(index, 'img', base64);
      } catch (err) {
        setError('Error converting image to base64');
        console.error(err);
      }
    }
  };

  const handleAddMember = () => {
    setHeroData({
      ...heroData,
      teamMember: [
        ...heroData.teamMember,
        {
          img: "",
          name: "",
          experience: ""
        }
      ]
    });
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = heroData.teamMember.filter((_, i) => i !== index);
    setHeroData({
      ...heroData,
      teamMember: updatedMembers
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await HeroOurteamPost(heroData);
      if (response) {
        alert('Data saved successfully!');
        fetchHeroData();
      }
    } catch (err) {
      setError('Error saving data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = (index) => {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'file';
    hiddenInput.accept = 'image/*';
    hiddenInput.onchange = (e) => handleImageUpload(e, index);
    hiddenInput.click();
  };

  if (!heroData.maintitle && !heroData.teamMember[0].img) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>
            
            <div className="space-y-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                    <div className="flex-1 space-y-4">
                      <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-24 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="h-12 bg-gray-200 rounded w-48"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team Section Settings</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Main Title</label>
          <input
            type="text"
            name="maintitle"
            value={heroData.maintitle}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter the main title"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-4">Team Members</h3>
          <div className="space-y-6">
            {heroData.teamMember.map((member, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <label className="block mb-2">Member Image</label>
                    <div 
                      onClick={() => triggerFileInput(index)}
                      className="cursor-pointer"
                    >
                      {member.img ? (
                        <img 
                          src={member.img}
                          alt={`Team member ${index + 1}`}
                          className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 shadow-md hover:opacity-80"
                        />
                      ) : (
                        <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400">
                          <span className="text-gray-500 text-sm text-center">Click to select image</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <label className="block mb-2">Member Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Enter member's name"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2">Experience</label>
                      <textarea
                        value={member.experience}
                        onChange={(e) => handleMemberChange(index, 'experience', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        rows="4"
                        placeholder="Enter member's experience"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveMember(index)}
                  className="text-red-500 mt-4 block"
                >
                  Remove Member
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddMember}
            className="bg-blue-500 text-white px-6 py-3 rounded-md mt-4"
          >
            Add Team Member
          </button>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 text-white px-6 py-3 rounded-md w-full md:w-auto"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default HeroOurteam;
