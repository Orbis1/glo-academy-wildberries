export const renderGoods = goods => {
    const goodsContainer = document.querySelector(".long-goods-list");
    goodsContainer.innerHTML = "";

    goods.forEach(g => {
        const goodBlock = document.createElement("div");

        goodBlock.classList.add("col-lg-3");
        goodBlock.classList.add("col-sm-6");

        goodBlock.innerHTML = `
        <div class="goods-card">
            <span class="label ${g.label ? null : 'd-none'}">${g.label}</span>
            <img src="db/${g.img}" alt="image: Hoodie" class="goods-image">
            <h3 class="goods-title">${g.name}</h3>
            <p class="goods-description">${g.description}</p>
            <button class="button goods-card-btn add-to-cart" data-id="${g.id}">
                <span class="button-price">$${g.price}</span>
            </button>
        </div>
        `;

        goodsContainer.append(goodBlock);
    });
};

export const getData = (value, category) => {
    fetch("https://glo-acadamy-wildberries-default-rtdb.firebaseio.com/db.json")
        .then(res => res.json())
        .then(data => {
            const array = category ? data.filter(g => g[category] === value) : data;
            localStorage.setItem("goods", JSON.stringify(array));
            if (window.location.pathname !== "/goods.html") {
                window.location.href = "/goods.html";
            } else {
                renderGoods(array);
            }
        });
};


export const getGoods = () => {
    const links = document.querySelectorAll(".navigation-link");
    const navigation = document.querySelector("ul.navigation");
    // navigation.addEventListener("click", event => console.dir(event.target.innerText));

    links.forEach(link =>
        link.addEventListener("click", event => {
            event.preventDefault();
            const {
                text: value,
                dataset: { field },
            } = event.target;

            getData(value, field);
        })
    );

    if (localStorage.getItem("goods") && window.location.pathname === "/goods.html") {
        renderGoods(JSON.parse(localStorage.getItem("goods")));
    }
};

