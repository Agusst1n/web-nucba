let menuToggle = document.querySelector('.menuToggle')
let header_list = document.querySelector('.header_list')
let header_link = document.querySelector('.header_link')
let header_h1_title = document.querySelector('.header_h1_title')
let header_paragraph = document.querySelector('.header_paragraph')
let card_img = document.querySelector('.card_img')
let card_img2 = document.querySelector('.card_img2')
let card_img3 = document.querySelector('.card_img3')



let pause_Icon = document.querySelector('.pause_Icon')
let btn = document.querySelector('.btn')

// let inputName = document.querySelector('#inputName')
// let main_izquierda = document.querySelector('.main_izquierda')
// let main_derecha = document.querySelector('.main_derecha')

// // inputName.addEventListener('focus', function(){
// //     main_izquierda.classList.toggle('active')
// //     main_derecha.classList.toggle('active')
// // })


let play_Icon = document.querySelector('.play_Icon')
play_Icon.addEventListener("click", function(){
    animation()
})

pause_Icon.addEventListener("click", function(){
    stopAnimation()
})

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    header_list.classList.toggle('active')
}

header_list.onclick = function(){
    header_list.classList.toggle('active')
    menuToggle.classList.toggle('active')
}

const animation = ()=>{
    header_h1_title.classList.toggle('active')
    header_paragraph.classList.toggle('active')
    btn.classList.toggle('active')
    card_img.classList.toggle('active')
    card_img2.classList.toggle('active')
    card_img3.classList.toggle('active')
    sonido.play()
}
const stopAnimation = () =>{
        header_h1_title.classList.toggle('active')
        header_paragraph.classList.toggle('active')
        btn.classList.toggle('active')
        card_img.classList.toggle('active')
        card_img2.classList.toggle('active')
        card_img3.classList.toggle('active')
        sonido.pause()

}
let sonido = new Audio();
sonido.src = './sounds/cyberpunk.mp3'
