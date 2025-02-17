import axios from "axios";

export const GetContactUs = async () => {
  try {
    const response = await axios.get(
      "https://sterlingplusone-backend-1.onrender.com/web/contectus"
    );
    console.log(response.data);
    if (response.status === 200) {
      return response.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
