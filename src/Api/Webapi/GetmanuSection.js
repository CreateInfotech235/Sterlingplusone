import axios from "axios";

export const GetManuSection = async () => {
  try {
    const response = await axios.get(
      "https://sterlingplusone-backend-1.onrender.com/web/menus"
    );
    if (response.status === 200) {
      return response.data[0];
    } else {
      return response.data[0];
    }
  } catch (error) {
    console.log(error);
  }
};
