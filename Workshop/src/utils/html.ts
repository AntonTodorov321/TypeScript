import { router } from "../router";

export class HtmlUtil {
    static render(root: HTMLElement) {
        const { pathname } = window.location;
        root.innerHTML = router[pathname];

        HtmlUtil.addEventListeners(root);
    };

    private static addEventListeners(root: HTMLElement) {
        const userBtn = document.getElementById("users") as HTMLElement;
        const postBtn = document.getElementById("posts") as HTMLElement;

        userBtn.addEventListener("click", () => {
            HtmlUtil.navigate(root, "/");
        });

        postBtn.addEventListener("click", () => {
            HtmlUtil.navigate(root, "/posts");
        });
    };

    private static navigate(root: HTMLElement, pathname: string) {
        const { origin } = window.location;
        const url = `${origin}${pathname}`;

        window.history.pushState({}, pathname, url);
        root.innerHTML = router[pathname];
    };
}