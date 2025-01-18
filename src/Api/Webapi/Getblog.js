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



export const GetBlogByTitle = async (title, id) => {
    try {
        let response;
        if (id) {
            response = await axios.get(`https://sterlingplusone-backend-1.onrender.com/web/getBlogByQuery?id=${id}`);
        } else {
            response = await axios.get(`https://sterlingplusone-backend-1.onrender.com/web/getBlogByQuery?title=${title}`);
        }
        console.log("response", response);
        if (response.data.message === "Either id or title is required") {
            return;
        }
        if (response.status === 200) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};


export const GetDefaultBlog = async () => {
    try {
        const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/web/defaultblog");
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const GetBlogPageSideSection = async () => {
    try {
        const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/web/blogpagesideSection");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

