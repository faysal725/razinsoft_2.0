import axios from "axios";


const crud = axios.create({
    baseURL: "https://admin.razinsoft.com/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})

export default crud;