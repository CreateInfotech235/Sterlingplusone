import axios from "axios";

export const GetServiceMain = async () => {
  try {
    const response = await axios.get(
      "https://sterlingplusone-backend-1.onrender.com/web/servicespages"
    );
    console.log(response.data[0]);
    if (response.status === 200) {
      return response.data[0];
    } else {
      return response.data[0];
    }
  } catch (error) {
    console.log(error);
  }
};

export const GetService = async () => {
  try {
    const response = await axios.get(
      "https://sterlingplusone-backend-1.onrender.com/web/servicespagesections"
    );
    console.log(response.data[0]);
    if (response.status === 200) {
      return response.data[0];
    } else {
      return response.data[0];
    }
  } catch (error) {
    console.log(error);
  }
};
