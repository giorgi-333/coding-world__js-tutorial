

// const todoList = []

// function addToTodo() {
//     todoList.push(todoInput.value)
    
//     res.innerHTML = ""

//     todoList.forEach((todo, i) => {
//         res.innerHTML += `${i+1}) ${todo}<br>`
//     })
// }


// const places = ["თბილისი","გორი","ქსანი","თელავი"]

// let history = "ქსანი - სოფელი მცხეთის მუნიციპალიტეტში"

// console.log(history.includes("სოფელ"))


const numbers = [1,4,6,12,34,12,45]

const filterNumbers = numbers.filter(item => {
    return item < 10
})

console.log(filterNumbers);