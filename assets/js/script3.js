let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

showSlide(currentSlide);
