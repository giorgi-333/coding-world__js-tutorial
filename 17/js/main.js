 

// setTimeout(logNumber,3000)

let intId =  setInterval(logNumber,1000)

x = 0

function logNumber() {
    console.log(x++)
    if(x>10)
        clearInterval(intId)
}