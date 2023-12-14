let moon = document.querySelector('#moon')
let book = document.querySelector('#mountains_front')
let stars = document.querySelector('#stars')
let text = document.querySelector('#cover')

let button = document.querySelector(".btn")
let nuvem = document.getElementsByClassName('nuvem')
let sol = document.getElementsByClassName('sol')
let solRaio = document.querySelector('.solRaio')

let last_known_scroll_position = 0;
let ticking = false;


function nuvemAnimation(value){

    for (var i = 0;i < nuvem.length; i++)
    {
        if ( i%2 == 0){
            nuvem[i].style.transform = `translateX(${value * 1}px)`
        }
        else{
            nuvem[i].style.transform = `translateX(${value * 0.8}px)`
        }
    }
    // for (var i = 0; i < sol.length; i++){
    //     sol[i].style.transform = `translateX(${value * 0.5}px)`
    // }
    
    // nuvem.style.transform = `translateX(${value * 5}px)`

}

function temporizador(inicio,fim,velocidade){
    let value = inicio; // valor inicial
    let endValue = fim; // valor final
    let increment = velocidade; // quanto o valor deve aumentar a cada vez
    let intervalId = setInterval(function() {
        if (value < endValue) {
            nuvemAnimation(value);
            value += increment;
        } else {
            clearInterval(intervalId); // para o contador quando o valor atinge o valor final
        }
    }, 30);
}

function night(){
    let body = document.querySelector('body');
    let logo = document.querySelector('.logo');
    let sol = document.querySelector('.divSol')
    logo.style.color = '#fff';
    text.style.color = '#fff';
    button.style.color = '#fff';
    button.style.backgroundColor = '#2b1055';
    button.style.border = '#2b1055'
    body.style.background = 'var(--bg-night)'
    body.classList.add('bodyNight');

    stars.style.display = 'block'

    for(i = 0; i < nuvem.length; i++){
        nuvem[i].style.display = 'none';
    }

    sol.style.display = 'none';


}

window.onload = function() {
        console.log(nuvem)
        temporizador(0,6000,1);
};

window.addEventListener("click",(e) =>{
    console.log(e.target)
    if (e.target.className == 'btn'){
        console.log('foi aqui')
        night();
    }
})


