const btn = document.querySelector("#btn");
const hex = ["A", "B","C","D", "E", "F", "0","1", "2", "3","4","5","6","7", "9"]      
const text = document.querySelector('.color')

btn.addEventListener("click",() =>{
    let  colors = "#";
    for(let i = 0; i < 6; i++){
     colors += hex[getRandomNumber()] ;
    }
text.textContent = colors
document.body.style.backgroundColor = colors
if(colors === "#000000"){
    btn.style.backgroundColor = "red" 
}
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}