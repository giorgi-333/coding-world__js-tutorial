

const names = ["გიორგი","ნიკა","ლიკა","ქეთი"]


// for(let name of names) {
//     console.log(name)
// }

names.forEach( (name,i)  => {
    res.innerHTML += `${i}) ${name}<br>`
} )

// const newNames = names.map(name => {
//     return name + "-"
// })

// console.log(newNames)
