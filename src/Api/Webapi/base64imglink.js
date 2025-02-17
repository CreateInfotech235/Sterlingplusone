import axios from "axios";

export const uploadimage = async (img, altname = "image") => {
  try {
    const response = await axios.post(
      `https://sterlingplusone-backend-1.onrender.com/imageStore/upload`,
      { img, altname }
    );
    console.log(response);
    //    get web base url
    const webBaseUrl = `https://sterlingplusone-backend-1.onrender.com/`;
    const path = `${webBaseUrl}${response.data.path}`;
    console.log(path);
    if (response.status === 200) {
      return path;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
