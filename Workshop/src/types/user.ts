import { Address, Company } from "./common";

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address
};

export type UserDetails = {
    phone: string,
    website: string,
    company: Company
} & User;