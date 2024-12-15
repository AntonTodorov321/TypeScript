export const fetchUtil = <T>(url: string, httpConfig?: RequestInit) => {
    return fetch(url, httpConfig)
        .then(res => res.json())
        .then((data: T) => data)
        .catch(err => console.error(`Error ${err}`));
};