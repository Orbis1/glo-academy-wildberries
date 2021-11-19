const search = () => {
    const input = document.querySelector(".search-block > input");
    input.addEventListener('input', (event) => {
        console.log(event.target.value)

    })

}

search();