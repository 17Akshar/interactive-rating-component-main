var submit = document.getElementById("submit")
var userc = document.getElementById("user_choice")
var submit_div = document.getElementById("submitted-c")
var rates = document.querySelectorAll(".btns")

rates.forEach((rate)=>{
  rate.addEventListener("click",()=>{
    userc.innerHTML = rate.innerHTML
  })
})


submit.addEventListener("click",submitted)

function submitted(){
  submit_div.style.display = "flex"
}