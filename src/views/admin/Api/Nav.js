import axios from "axios";

export const GetNav = async () => {
    try {
        const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/web/navbars");
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


export const NavPost = async (data) => {
    try {

        const response = await axios.post("https://sterlingplusone-backend-1.onrender.com/web/navbar", data);
        console.log(response);
        if (response.status === 200) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow error for caller to handle
    }
};
