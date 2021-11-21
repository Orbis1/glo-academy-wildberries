export const searchCart = () => {
    const cart = document.querySelector("button.button-cart");
    const btnModalClose = document.querySelector("button.modal-close");
    const modal = document.querySelector("#modal-cart");

    const showCart = () => {
        modal.style.display = "flex";
    };

    const hideCart = () => {
        modal.style.display = "";
    };

    cart.addEventListener("click", showCart);
    btnModalClose.addEventListener("click", hideCart);

    modal.addEventListener("click", event => {
        const isModal = event.target.closest(".modal");
        if (!isModal) hideCart();
    });

    window.addEventListener("keydown", event => {
        const { key } = event;
        if (key === "Escape") hideCart();
    });
};
