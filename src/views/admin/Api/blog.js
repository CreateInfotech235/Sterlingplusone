import axios from "axios";

export const GetBlogPage = async () => {
    try {
        const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/web/blogpages");
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


export const BlogPagePost = async (data) => {
    try {
        console.log(data);
        const response = await axios.post("https://sterlingplusone-backend-1.onrender.com/web/blogpage", data);
        console.log(response.data);
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
