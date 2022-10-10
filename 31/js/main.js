

 const galImags = document.querySelectorAll(".imgs img")

 galImags.forEach(el => {
   el.addEventListener("click", param => {
      coverImg.src = param.target.src
   })
 })