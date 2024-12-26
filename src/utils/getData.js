export const getData = async ({ url, options = {} }) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error(error.message);
    }
}
