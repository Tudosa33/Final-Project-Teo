const track = document.querySelector('.carosel-track');
const slides = Array.from(track.children); // Array form muta copii lui track intr-o lista;
const nextButton = document.querySelector(".carosel_button--right");
const prevButton = document.querySelector(".carosel_button--left");
const dotsNav = document.querySelector(".carosel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;//getBoundingClientRec ia dimensiunea elemetului

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px"
}
slides.forEach(setSlidePosition);


function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide")
    targetSlide.classList.add("current-slide")
}

function updateDots(currentDot, targetDot) {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add('current-slide');
}

prevButton.addEventListener("click", function(e) {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;// merge la elementul de dinainte
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot)

})

nextButton.addEventListener("click", function(e) {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling; // merge la urmatorul slide
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot)
})

dotsNav.addEventListener('click', function(e) {
    const targetDot = e.target.closest('button');

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot)
});



