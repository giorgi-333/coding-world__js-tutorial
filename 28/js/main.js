
const places = ["თბილისი","გორი","ქსანი","თელავი"]

function showList(list) {
   res.innerHTML = ""
   list.forEach(item => {
    res.innerHTML += `${item} <br>`
   });
}

showList(places)

function filterList() {
    const list = places.filter(item => {
        return item.includes(todoInput.value)
    })
    showList(list)
}