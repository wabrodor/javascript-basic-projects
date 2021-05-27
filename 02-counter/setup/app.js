const btn = document.querySelectorAll(".btn")
const value = document.querySelector("#value")

let count = 0;

btn.forEach((btns) => {
   btns.addEventListener("click", (e) =>{
    if(e.currentTarget.classList.contains("decrease")){
        count--
        value.style.color = "red"
      
    }else if(e.currentTarget.classList.contains("increase")){
        count++
        value.style.color ="green"
    }
    else {
        count = 0
        value.style.color = "unset"
    }
    value.textContent = count
   })
});