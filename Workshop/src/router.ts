import { RouteMap } from "./types/router";
import { postPage } from "./views/post";
import { userPage } from "./views/user";

export const router: RouteMap = {
    "/": userPage,
    "/posts": postPage
};