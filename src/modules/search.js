import { renderGoods } from "./getGoods.js";

export const getData = (value, category) => {
    fetch("https://glo-acadamy-wildberries-default-rtdb.firebaseio.com/db.json")
        .then(res => res.json())
        .then(data => {
            const array = data.filter(g => g.name.toLowerCase().includes(value.toLowerCase()));

            localStorage.setItem("goods", JSON.stringify(array));

            if (window.location.pathname !== "/goods.html") {
                window.location.href = "/goods.html";
            } else {
                renderGoods(array);
            }
        });
};

export const search = () => {
    const input = document.querySelector(".form-control > input");
    const search = document.querySelector("#button-addon2");

    search.addEventListener("click", () => {
        console.dir(input.value);
        getData(input.value)
    });
};
