document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector('.slider__button--prev');
    const nextButton = document.querySelector('.slider__button--next');
    const slides = document.querySelectorAll('.header__slider');

    let currentSlide = 0;

    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('header__slider--active');
            } else {
                slide.classList.remove('header__slider--active');
            }
        });
    }

    
    showSlide(currentSlide);

    
    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    
    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });
});
