export const search = () => {
    const input = document.querySelector(".search-block > input");
    const search = document.querySelector("#button-addon2");

    search.addEventListener("click", () => {
        console.dir(input.value);
    });
};