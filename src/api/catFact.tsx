import API from './api';
import { Result } from '../types/result';



export default class CatFactService {
    static async getCatFacts(): Promise<Result | null> {
        let result: Result | null = null;

        try {
            const response = await API.axios.get("facts");
            result = API.format(response);
        } catch (error) {
            if (error.response != null) {
                result = API.format(error.response);
            }
        } finally {
            return result;
        }
    }

    static async getRandomFact(): Promise<Result | null> {
        let result: Result | null = null;

        try {
            const response = await API.axios.get("facts/random");
            result = API.format(response);
        } catch (error) {
            if (error.response != null) {
                result = API.format(error.response);
            }
        } finally {
            return result;
        }
    }
}