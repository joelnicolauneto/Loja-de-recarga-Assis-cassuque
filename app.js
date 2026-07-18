// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


menuBtn.addEventListener("click",()=>{


    menu.classList.toggle("ativo");


});
// PRELOADER


window.addEventListener("load",()=>{


const preloader =
document.getElementById("preloader");



if(preloader){


setTimeout(()=>{


preloader.style.opacity="0";


setTimeout(()=>{


preloader.style.display="none";


},1000);



},1500);



}


});