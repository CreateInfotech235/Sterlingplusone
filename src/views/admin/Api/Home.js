import axios from "axios";

export const GetHome = async () => {
  try {
    const response = await axios.get(
      "https://sterlingplusone-backend-1.onrender.comapi/home"
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
