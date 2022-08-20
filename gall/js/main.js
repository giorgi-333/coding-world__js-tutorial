
const imgs = document.querySelectorAll(".cont img")

imgs.forEach(el => {
    el.addEventListener("click", img => {
        let modalImg = document.querySelector("#modal img")
        modalImg.src = img.target.src
        modal.style.display = "flex"
    })
})

modal.addEventListener("click", (el) => {
    if (el.target === modal)
        modal.style.display = "none"
})

close_icon.addEventListener("click", () => {
    modal.style.display = "none"
})


