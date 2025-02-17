import axios from "axios";

export const GetHeroSection = async () => {
  try {
    const response = await axios.get(
      "https://sterlingplusone-backend-1.onrender.com/web/heroes"
    );
    if (response.status === 200) {
      return response.data[0].heroSectionData;
    } else {
      return response.data[0].heroSectionData;
    }
  } catch (error) {
    console.log(error);
  }
};
