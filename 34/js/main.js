


if(localStorage.darkMode && Number(localStorage.darkMode)) {
    switchDarkMode()
}

function switchDarkMode() {
    document.body.classList.toggle("dark")
    localStorage.darkMode = document.body.classList.contains("dark") ? 1 : 0
}

// let user = {
//     id: 1,
//     name: "გიორგი"
// }

// ჯავასკრიპტის ობიექტიდან JSON-ში
// let userJson = JSON.stringify(user)

// localStorage.user = userJson


// JSON-დან ჯავასკრიპტის ობიექტში
let user = JSON.parse(localStorage.user)

console.log(user);

userPlace.innerHTML = user.name

