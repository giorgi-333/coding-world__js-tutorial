

function openImg(img) { 
    coverImg.src = img.src
 }

 coverImg.addEventListener("click", param => {
    console.log(param.target)
 })