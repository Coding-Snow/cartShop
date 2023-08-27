let bttounBox = document.querySelectorAll('.cartBtn');
let cartValue = document.querySelector('.added');
let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus');
let cartValu = 0;

bttounBox.forEach(button =>{
 button.addEventListener('click', cartClick)
})
function cartClick(){
 let button = this;
 button.classList.add('clicked');
 cartValue.textContent = cartValu += 1;
}
btnPlus.addEventListener('click', ()=>{
 if(cartValue.nodeValue <= 0){
  cartValue.textContent = cartValu += 1;
 }
});
btnMinus.addEventListener('click', ()=>{
 if(Number(cartValue.innerText) - 1 >= 0) 
 cartValue.textContent = cartValu -= 1;
})
