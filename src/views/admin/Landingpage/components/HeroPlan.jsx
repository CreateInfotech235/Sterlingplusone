import { useState, useEffect } from "react";
import { GetHeroPlan, HeroPlanPost } from "../../Api/HeroPlan";
import { fileToBase64 } from "../../Api/Convertbase64";

const HeroPlan = () => {
  const [heroData, setHeroData] = useState({
    heroPlans: {
      maintitle: "",
      plan: [
        {
          img: "",
          title: "",
          price: 0,
          weight: "",
          benifits: [""],
          button: [
            {
              name: "",
              link: "",
            },
          ],
        },
      ],
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroData = async () => {
    try {
      setLoading(true);
      const response = await GetHeroPlan();
      if (response && response[0]) {
        setHeroData(response[0]);
      }
    } catch (err) {
      setError("Failed to fetch hero plan data");
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
      heroPlans: {
        ...heroData.heroPlans,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handlePlanChange = (index, field, value) => {
    const updatedPlans = [...heroData.heroPlans.plan];
    updatedPlans[index] = {
      ...updatedPlans[index],
      [field]: value,
    };
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: updatedPlans,
      },
    });
  };

  const handleBenefitChange = (planIndex, benefitIndex, value) => {
    const updatedPlans = [...heroData.heroPlans.plan];
    const updatedBenefits = [...updatedPlans[planIndex].benifits];
    updatedBenefits[benefitIndex] = value;
    updatedPlans[planIndex] = {
      ...updatedPlans[planIndex],
      benifits: updatedBenefits,
    };
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: updatedPlans,
      },
    });
  };

  const handleButtonChange = (planIndex, buttonIndex, field, value) => {
    const updatedPlans = [...heroData.heroPlans.plan];
    const updatedButtons = [...updatedPlans[planIndex].button];
    updatedButtons[buttonIndex] = {
      ...updatedButtons[buttonIndex],
      [field]: value,
    };
    updatedPlans[planIndex] = {
      ...updatedPlans[planIndex],
      button: updatedButtons,
    };
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: updatedPlans,
      },
    });
  };

  const handleImageUpload = async (e, planIndex) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        handlePlanChange(planIndex, "img", base64);
      } catch (err) {
        setError("Error converting image to base64");
        console.error(err);
      }
    }
  };

  const handleAddPlan = () => {
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: [
          ...heroData.heroPlans.plan,
          {
            img: "",
            title: "",
            price: 0,
            weight: "",
            benifits: [""],
            button: [{ name: "", link: "" }],
          },
        ],
      },
    });
  };

  const handleAddBenefit = (planIndex) => {
    const updatedPlans = [...heroData.heroPlans.plan];
    updatedPlans[planIndex].benifits.push("");
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: updatedPlans,
      },
    });
  };

  const handleAddButton = (planIndex) => {
    const updatedPlans = [...heroData.heroPlans.plan];
    updatedPlans[planIndex].button.push({ name: "", link: "" });
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: updatedPlans,
      },
    });
  };

  const handleRemovePlan = (index) => {
    const updatedPlans = heroData.heroPlans.plan.filter((_, i) => i !== index);
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: updatedPlans,
      },
    });
  };

  const handleRemoveBenefit = (planIndex, benefitIndex) => {
    const updatedPlans = [...heroData.heroPlans.plan];
    updatedPlans[planIndex].benifits = updatedPlans[planIndex].benifits.filter(
      (_, i) => i !== benefitIndex
    );
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: updatedPlans,
      },
    });
  };

  const handleRemoveButton = (planIndex, buttonIndex) => {
    const updatedPlans = [...heroData.heroPlans.plan];
    updatedPlans[planIndex].button = updatedPlans[planIndex].button.filter(
      (_, i) => i !== buttonIndex
    );
    setHeroData({
      ...heroData,
      heroPlans: {
        ...heroData.heroPlans,
        plan: updatedPlans,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await HeroPlanPost(heroData);
      if (response) {
        alert("Data saved successfully!");
        fetchHeroData();
      }
    } catch (err) {
      setError("Error saving data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = (planIndex) => {
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "file";
    hiddenInput.accept = "image/*";
    hiddenInput.onchange = (e) => handleImageUpload(e, planIndex);
    hiddenInput.click();
  };

  if (!heroData.heroPlans.maintitle && !heroData.heroPlans.plan[0].img) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4"></div>
            
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <div className="h-32 bg-gray-200 rounded-md"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((benefit) => (
                      <div key={benefit} className="h-4 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                  <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Hero Plans Section Settings
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6">
            <label className="block text-lg mb-2">Main Title</label>
            <input
              type="text"
              name="maintitle"
              value={heroData.heroPlans.maintitle}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <h3 className="text-2xl mb-4">Plans</h3>
            {heroData.heroPlans.plan.map((plan, planIndex) => (
              <div
                key={planIndex}
                className="mb-6 p-6 border border-gray-200 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <label className="block text-lg mb-2">Plan Image</label>
                  <div
                    onClick={() => triggerFileInput(planIndex)}
                    className="cursor-pointer w-full sm:w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center mx-auto"
                  >
                    {plan.img ? (
                      <img
                        src={plan.img}
                        alt={`Plan ${planIndex + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <span className="text-gray-400 text-center">
                        Click to select image
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-lg mb-2">Title</label>
                    <input
                      type="text"
                      value={plan.title}
                      onChange={(e) =>
                        handlePlanChange(planIndex, "title", e.target.value)
                      }
                      className="w-full p-3 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-lg mb-2">Price</label>
                    <input
                      type="number"
                      value={plan.price}
                      onChange={(e) =>
                        handlePlanChange(
                          planIndex,
                          "price",
                          parseFloat(e.target.value)
                        )
                      }
                      className="w-full p-3 border rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-lg mb-2">Weight</label>
                    <input
                      type="text"
                      value={plan.weight}
                      onChange={(e) =>
                        handlePlanChange(planIndex, "weight", e.target.value)
                      }
                      className="w-full p-3 border rounded-md"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg mb-2">Benefits</h4>
                  {plan.benifits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex mb-2">
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) =>
                          handleBenefitChange(
                            planIndex,
                            benefitIndex,
                            e.target.value
                          )
                        }
                        className="w-full p-3 border rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveBenefit(planIndex, benefitIndex)
                        }
                        className="ml-2 text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddBenefit(planIndex)}
                    className="text-blue-500"
                  >
                    Add Benefit
                  </button>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg mb-2">Buttons</h4>
                  {plan.button.map((button, buttonIndex) => (
                    <div
                      key={buttonIndex}
                      className="flex flex-col sm:flex-row mb-2"
                    >
                      <input
                        type="text"
                        value={button.name}
                        onChange={(e) =>
                          handleButtonChange(
                            planIndex,
                            buttonIndex,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Button Name"
                        className="w-full sm:w-1/2 p-3 border rounded-md mb-2 sm:mb-0 sm:mr-2"
                      />
                      <input
                        type="text"
                        value={button.link}
                        onChange={(e) =>
                          handleButtonChange(
                            planIndex,
                            buttonIndex,
                            "link",
                            e.target.value
                          )
                        }
                        placeholder="Button Link"
                        className="w-full sm:w-1/2 p-3 border rounded-md mb-2 sm:mb-0 sm:mr-2"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveButton(planIndex, buttonIndex)
                        }
                        className="ml-2 text-red-500 sm:ml-0 sm:mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddButton(planIndex)}
                    className="text-blue-500 mt-2 sm:mt-0"
                  >
                    Add Button
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemovePlan(planIndex)}
                  className="mt-4 text-red-500"
                >
                  Remove Plan
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPlan}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              Add New Plan
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroPlan;
