import axios from "axios";

export const GetNavSection = async () => {
    try {
        const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/web/navbars");
        if (response.status === 200) {
            return response.data[0];
        } else {
            return response.data[0];
        }
    } catch (error) {
        console.log(error);
    }
};
