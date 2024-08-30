import { Api } from "./axiosConfig";

const getSapatos = async (sapatos) => {
    try {
        const data = await Api.get(/categories/4)
        if(data) {
            return data
        }
    } catch (error) {
        console.log(error);
        
    }
}