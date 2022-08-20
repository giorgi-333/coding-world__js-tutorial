
function startRocket() {
    rocket.classList.add("start")

    setTimeout(() => {
        rocket.classList.remove("start")
    },2000)
}