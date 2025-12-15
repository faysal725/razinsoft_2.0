import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
// "https://admin.razinsoft.com/api"
const crud = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})


crud.interceptors.request.use(
    (config) => {
        // This is equivalent to checking 'authStore.token' in your composable
        const token = Cookies.get('auth_token'); 

        if (token) {
            // This line merges the Authorization header with any existing headers
            // passed in the original request options.
            config.headers.Authorization = `Bearer ${token}`; 
        }
        
        // Custom headers are already merged into config.headers by Axios itself
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default crud;