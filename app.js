import { _ , createElement} from "https://cdn.jsdelivr.net/gh/LeojAnidem/Library@master/domFunctions.js";

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {
    if (n > sliderItems.length){slideIndex = 1}
    if (n < 1){slideIndex = sliderItems.length}

    for(let i = 0; i < sliderItems.length; i++){
        let classSlider = sliderItems[i].className,
            classDot = dotItems[i].className;

        sliderItems[i].className = classSlider.slice(0, 11);
        dotItems[i].className = classDot.slice(0, 20);
        
        sliderItems[i].className += ' no-active';
        dotItems[i].className += ' far';
    }

    sliderItems[slideIndex-1].className = sliderItems[slideIndex-1].className.replace('no-active', 'active');
    dotItems[slideIndex-1].className = dotItems[slideIndex-1].className.replace('far', 'fa');
}

let sliderItems = document.querySelectorAll('.slider-item');
let slideIndex = 1;

for(let i = 1; i <= sliderItems.length; i++){
    createElement('.slider-dot-container', 'i' , `dot-${i} icon fa-circle far`);
    _(`.dot-${i}`).addEventListener('click', function(){currentSlide(i)});
}

let dotItems = document.querySelectorAll('.fa-circle');

showSlides(slideIndex);

_('.slider__angle--prev').addEventListener('click', function(){plusSlides(-1)});
_('.slider__angle--next').addEventListener('click', function(){plusSlides(1)});
