const searchCart = () => {
    const cart = document.querySelector("button.button-cart");
    const btnModalClose = document.querySelector("button.modal-close");
    const modal = document.querySelector("#modal-cart");

    const showCart = () => {
        modal.style.display = 'flex';
    }

    const hideCart = () => {
        modal.style.display = '';
    }

    cart.addEventListener('click', showCart);
    btnModalClose.addEventListener('click', hideCart);
}

searchCart();
