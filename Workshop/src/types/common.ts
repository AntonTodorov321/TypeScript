export type Geo = {
    lat: string,
    lng: string,
};

export type Company = {
    name: string,
    catchPhrase: string,
    bs: string,
};

export type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
};