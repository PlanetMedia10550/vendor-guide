export const fetcher = (url) => fetch(process.env.BASE_API_URL+url).then((res) => res.json());