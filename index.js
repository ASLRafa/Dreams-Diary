let moon = document.querySelector('#moon')
let book = document.querySelector('#mountains_front')
let stars = document.querySelector('#stars')
let text = document.querySelector('#cover')
let button = document.querySelector(".btn")
let book_back = document.querySelector('#mountains_behind')

let last_known_scroll_position = 0;
let ticking = false;




window.addEventListener("scroll",function(){
    let value = this.window.scrollY;
    stars.style.transform = `translateX(${value * 0.40}px)`;
    moon.style.transform = `translate(${value * 0.40}px, ${value * 0.40}px)`;
    book.style.transform = `translate(-${value*0.005}px)`;
    book_back.style.transform = `translateX(-${value* 0.1}px)`;
    text.style.marginRight = ( value * 2 ) + 'px'
})