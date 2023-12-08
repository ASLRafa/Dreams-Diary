let moon = document.querySelector('#moon')
let book = document.querySelector('#mountains_front')
let stars = document.querySelector('#stars')
let text = document.querySelector('#cover')
let button = document.querySelector(".btn")
let book_back = document.querySelector('#mountains_behind')

let last_known_scroll_position = 0;
let ticking = false;




function homeAnimation(value){
    
    stars.style.transform = `translateX(${value*2}px)`
    moon.style.transform = `translate(${value * 0.4}px, ${value * 1}px)`;
    text.style.transform = `translateX(-${value * 0.5}px)`
    book.style.transform = `translateX(-${value * 0.1}px)`
    book_back.style.transform = `translateX(${value * 0.1}px)`

}

function temporizador(){
    let value = 0; // valor inicial
    let endValue = 200; // valor final
    let increment = 1; // quanto o valor deve aumentar a cada vez
    let intervalId = setInterval(function() {
        if (value < endValue) {
            homeAnimation(value);
            value += increment;
        } else {
            clearInterval(intervalId); // para o contador quando o valor atinge o valor final
        }
    }, 30);
}


window.onload = function() {
    setTimeout(function() {
        temporizador();
    }, 100);
};




// window.addEventListener('scroll', function(e) {
//     last_known_scroll_position = this.window.scrollY;

//     if (!ticking) {
//         window.requestAnimationFrame(function() {
//             homeAnimation(last_known_scroll_position);
//             ticking = false;
//         });

//         ticking = true;
//     }
// });