const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const text = document.querySelector('.color')

btn.addEventListener("click",() =>{
text.textContent = colors[getRandomNumber()];
document.body.style.backgroundColor = colors[getRandomNumber()]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}