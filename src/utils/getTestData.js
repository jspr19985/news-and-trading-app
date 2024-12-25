// use as an example for news api and finance api
import { getData } from "./getData";

export const getTestData = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return await getData({ url, options });
}
