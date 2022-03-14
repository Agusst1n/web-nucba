let inputName = document.querySelector('#inputName')
let main_izquierda = document.querySelector('.main_izquierda')
let main_derecha = document.querySelector('.main_derecha')
let main_h1_title = document.querySelector('.main_h1_title')
let main_h1_title2 = document.querySelector('.main_h1_title2')

inputName.addEventListener('focus', function(){
    main_izquierda.classList.toggle('active')
    main_derecha.classList.toggle('active')
    main_h1_title.classList.toggle('active')
    main_h1_title2.classList.toggle('active')
})