export const searchCart = () => {
    const cart = document.querySelector("button.button-cart");
    const btnModalClose = document.querySelector("button.modal-close");
    const modal = document.querySelector("#modal-cart");
    const goodsContainer = document.querySelector(".long-goods-list");
    const cartTable = document.querySelector(".cart-table__goods");
    const modalForm = document.querySelector(".modal-form");

    modalForm.addEventListener("submit", event => {
        event.preventDefault();
        sendForm();
        console.log(event);
    });

    const sendForm = () => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        const [name, phone] = modalForm.querySelectorAll('.modal-input')
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                cart,
                name: name.value,
                phone: phone.value,
            }),
        }).then(() => {
            hideCart();
            changeStorage('', 'clear');
        });
    };

    const updateCart = (array, id, action) => {
        if (action === "delete") {
            return array.filter(item => item.id !== id);
        } else if (action === "increase") {
            return array.map(item => {
                if (item.id === id) item.count++;
                return item;
            });
        } else if (action === "decrease") {
            return array.map(item => {
                if (item.id === id && item.count > 0) item.count--;
                return item;
            });
        } else if (action === 'clear') {
            return [];
        }
    };

    const changeStorage = (id, name) => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const newCart = updateCart(cart, id, name);
        localStorage.setItem("cart", JSON.stringify(newCart));
        renderCart(newCart);
    };

    const renderCart = items => {
        cartTable.innerHTML = "";
        return items.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><button class = "cart-btn-minus">-</button></td>
                <td>${item.count}</td>
                <td><button class = "cart-btn-plus">+</button></td>
                <td>${item.count * item.price}</td>
                <td><button class = "cart-btn-delete">x</button></td>
            `;
            cartTable.append(row);

            row.addEventListener("click", event => {
                const {
                    target: { classList },
                } = event;
                if (classList.contains("cart-btn-minus")) {
                    changeStorage(item.id, "decrease");
                } else if (classList.contains("cart-btn-plus")) {
                    changeStorage(item.id, "increase");
                } else if (classList.contains("cart-btn-delete")) {
                    changeStorage(item.id, "delete");
                }
            });
        });
    };

    const showCart = () => {
        const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        renderCart(cartItems);
        modal.style.display = "flex";
    };

    const hideCart = () => {
        modal.style.display = "";
    };

    const addToCart = goodId => {
        const goods = JSON.parse(localStorage.getItem("goods"));
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        const clickedItem = goods.find(g => g.id === goodId);

        if (cart.some(item => item.id === clickedItem.id)) {
            cart.map(item => {
                if (item.id === clickedItem.id) item.count++;
                return item;
            });
        } else {
            cart.push({ ...clickedItem, count: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    cart.addEventListener("click", showCart);
    btnModalClose.addEventListener("click", hideCart);

    modal.addEventListener("click", event => {
        const isModal = event.target.closest(".modal");
        const isOverlay = event.target.classList.contains("overlay");
        if (!isModal && isOverlay) hideCart();
    });

    window.addEventListener("keydown", event => {
        const { key } = event;
        if (key === "Escape") hideCart();
    });

    if (goodsContainer) {
        goodsContainer.addEventListener("click", event => {
            const { target } = event;
            const btn = target.closest(".add-to-cart");
            if (btn) {
                addToCart(btn.dataset.id);
            }
        });
    }
};
