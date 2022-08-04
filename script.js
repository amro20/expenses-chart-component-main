let coulmnDiv = document.querySelectorAll(".column");
let amountDiv = document.querySelectorAll(".amount");


coulmnDiv.forEach((e)=>{
  e.onclick=function(){
    e.classList.toggle("active");
  }
});

amountDiv.forEach((e)=>{
  e.textContent = e.dataset.amount
})
