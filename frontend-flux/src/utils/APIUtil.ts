
import axios from "axios";

const queryString = require('query-string');

export class APIUtil {
    static get = async function (url: string, params?: any) {
        const queryParams = queryString.stringify(params, {
            skipNull: true
        });
        url += `?${queryParams}`;
        const response = await axios.get(url);
        return response.data;
    }
}