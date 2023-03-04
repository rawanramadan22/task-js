
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('#cart-items');
const totalPriceSpan = document.querySelector('#total-price');
const totalBtn = document.querySelector('#total-btn');

let cartItems = [];
let totalPrice = 0;

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const  productPri = btn.getAttribute('name');
    const productPrice = btn.getAttribute('data-price');
   
    cartItems.push(Number(productPrice));
    cartItemsList.innerHTML += `<p>${productPri}</p>`+  `<p>$${productPrice}</p>`+"<hr>";
    totalPrice += Number(productPrice) ;
    cartItems.push(Number(productPri));

  });
});

totalBtn.addEventListener('click', () => {
  totalPriceSpan.innerHTML = `$${totalPrice}`;
});

// var allproducts = document.querySelectorAll(".list li")
// var content = document.querySelector("#content")
// var btn = document.querySelector("#total-btn")
// var text= document.querySelectorAll("#myBtn")
// var addToCartBtns = document.querySelectorAll('.add-to-cart');
// var title= document.querySelectorAll("#titlee")
// var cornar =document.querySelector("cornar")

// var totalPrice = 0
 
// allproducts.forEach(function (item){
//     item.onclick = function(){
//         totalPrice += +(item.getAttribute("price"))
//         content.innerHTML += item.textContent + "/"
//     }
// })

// function myFunction(){
//   var x =
//   document.getElementById("myBtn").name;
//   document.getElementById("titlee").innerHTML = x;
//  content.innerHTML += titlee.textContent + "/"

// allproducts.forEach(function (lit){
//       totalPrice += +(lit.getAttribute("price"))
//       content.innerHTML += item.textContent + "/"
  
// })
// }

// btn.onclick = function(){
//     document.getElementById("total-btn").onclick = function(){
//             document.getElementById("cornar").innerHTML = totalPrice
//     }

// }
