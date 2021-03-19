let button = document.querySelector('.scroll')
button.addEventListener('click',goToTop)

function goToTop(){
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
}
function showTop(){
    document.body.scrollTop>200 || document.documentElement.scrollTop>200?
        (document.querySelector(".scroll").style.display = "block"):
        (document.querySelector(".scroll").style.display = "none")
}
window.onscroll = function (){showTop()}