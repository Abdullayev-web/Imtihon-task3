let btn1 = document.querySelector('.add')
let btn2 = document.querySelector('.del')
let blok = document.querySelector('.blok')

btn1.addEventListener('click', ()=>{
    blok.classList.add('blok')
})
btn2.addEventListener('click', ()=>{
    blok.classList.remove('blok')
})