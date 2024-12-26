import { getData } from "./getData";

export const getNewsData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?category=business&from=2024-11-25&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_ORG_KEY}`;
    return await getData({ url });
}
