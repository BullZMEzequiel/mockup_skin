let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = '0';
        slide.style.transform = i === index ? 'translateY(0)' : i < index ? 'translateY(-100%)' : 'translateY(100%)';
        if (i === index) {
            slide.style.opacity = '1';
        }
    });

    // Deshabilitar botones si estamos en el primer o último slide
    prevSlideBtn.disabled = index === 0;
    nextSlideBtn.disabled = index === slides.length - 1;
}

// Mostrar el primer slide al cargar la página
showSlide(currentSlide);

// Evento para el botón "anterior"
prevSlideBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

// Evento para el botón "siguiente"
nextSlideBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});