import { getData } from "./search.js";

export const viewAll = () => {
    if (window.location.pathname !== "/index.html") return;
    const btn = document.querySelector(".more");
    btn.addEventListener("click", event => {
        event.preventDefault();
        window.location.href = "/goods.html";
        getData("");
    });
};
