export const getGoods = () => {
    const links = document.querySelectorAll(".navigation-link");
    const navigation = document.querySelector("ul.navigation");
    // navigation.addEventListener("click", event => console.dir(event.target.innerText));

    const getData = category => {
        console.log("load data");
        fetch("https://glo-acadamy-wildberries-default-rtdb.firebaseio.com/db.json")
            .then(res => res.json())
            .then(data => data);
    };

    links.forEach(link =>
        link.addEventListener("click", event => {
            event.preventDefault();
            const {
                text: value,
                dataset: { field },
            } = event.target;

            let goods = localStorage.getItem("goods");
            if (goods === null) {
                goods = getData();
                localStorage.setItem("goods", JSON.stringify(data));
            }
            const json = JSON.parse(goods);
            console.log(Object.values(json).filter(g => g[field] === value));
        })
    );
};