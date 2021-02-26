import axios from 'axios';
const DEFAULT_URL: string = "https://cat-fact.herokuapp.com"

const axiosInstance = axios.create({
    baseURL: DEFAULT_URL
});

const resultFormater = (result: any) => {
    return {
        status: result.status,
        data: result.data
    };
}

const exportObject = {
    axios: axiosInstance,
    DEFAULT_URL,
    URL: DEFAULT_URL,
    format: resultFormater
}

export default exportObject;