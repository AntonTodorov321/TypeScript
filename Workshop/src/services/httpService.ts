import { fetchUtil } from "../utils/http";

export class HttpService<T> {
    protected url: string;
    protected data = {} as T;
    protected dataCollections = {} as T[];

    constructor(url: string) {
        this.url = url;
    };

    getAll() {
        return fetchUtil<T>(this.url) as Promise<T[]>;
    };

    getOne(id: number) {
        return fetchUtil<T>(`${this.url}/${id}`) as Promise<T>;
    };

    create(body: T) {
        const config = {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };

        return fetchUtil<T>(this.url, config);
    };

    update<T extends { id: number }>(body: T) {
        const config = {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "content-Type": "application/json; charset=UTF-8"
            }
        };

        return fetchUtil<T>(`${this.url}/${body.id}`, config) as Promise<T>;
    };

    delete(id: number) {
        const config = {
            method: "DELETE"
        };

        return fetchUtil<T>(`${this.url}/${id}`, config) as Promise<T>;
    };
};