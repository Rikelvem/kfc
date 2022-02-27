const slides = document.querySelectorAll('.slides')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

i = 0

function ativarSlide (n) {
    for(slide of slides)
    slide.classList.remove('ativo')
    slides[n].classList.add('ativo')
}

next.addEventListener('click', function() {
    if(i == slides.length - 1) {
        i = 0
        ativarSlide (i)
    }
    else {
        i++
        ativarSlide (i)
    }
})

prev.addEventListener('click', function() {
    if(i == 0) {
        i = slides.length - 1
        ativarSlide (i)
    }
    else {
        i--
        ativarSlide (i)
    }
})