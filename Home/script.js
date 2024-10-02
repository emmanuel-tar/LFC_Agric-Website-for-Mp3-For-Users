const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click',()=>{
    navLinks.style.display = navLinks.style.display === 'flex' ?'none': 'flex';
});


//Slider Functionality
const slides = document.querySelectorAll('slide');
let currentSlide = 0;

const nextButton = document.getElementById('next');

const preButton = document.getElementById('prev');

function showSlide(index){
    // Reset all slide

    slides.forEach(slides => slide.classList.remove('active'));

    slides[index].classList.add('active');
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide = (currentSlide - 1 +slides.length) % slides.length;
showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
preButton.addEventListener('click', prevSlide);


setInterval(nextSlide,5000);