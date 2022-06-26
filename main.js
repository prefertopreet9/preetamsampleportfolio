var hamburgerContainer=document.querySelector('.header-main-nav');
var hamburger= document.querySelector('.header-main-nav-hamburger');
var links=document.querySelectorAll('.header-main-nav-links');

hamburger.addEventListener('click',function(){
    hamburgerContainer.classList.toggle("clicked");
});
