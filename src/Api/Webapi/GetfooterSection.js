import axios from "axios";

export const GetFooterSection = async () => {
  try {
    const response = await axios.get(
      "https://sterlingplusone-backend-1.onrender.com/web/footer"
    );
    if (response.status === 200) {
      return response.data.footer;
    } else {
      return response.data.footer;
    }
  } catch (error) {
    console.log(error);
  }
};
