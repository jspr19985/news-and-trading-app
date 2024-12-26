import { getData } from "./getData";

export const getFinanceData = async () => {
    const options = {
        method: 'GET',
        json: true,
        headers: { 'User-Agent': 'request' }
    };
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API_KEY}`;
    return await getData({ url, options });
}
