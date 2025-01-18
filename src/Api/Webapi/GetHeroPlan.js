import axios from "axios";

export const GetHeroPlan = async () => {
    try {
        const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/web/heroplans");
        if (response.status === 200) {
            return response.data[0].heroPlans;
        } else {
            return response.data[0].heroPlans;
        }
    } catch (error) {
        console.log(error);
    }
};