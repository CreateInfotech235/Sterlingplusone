import axios from "axios";

export const GetHeroOurServices = async () => {
    try {
        const response = await axios.get("https://sterlingplusone-backend-1.onrender.com/web/heroourservices");
        if (response.status === 200) {
            return response.data[0].heroOurServices ;
        } else {
            return response.data[0].heroOurServices;
        }
    } catch (error) {
        console.log(error);
    }
};
