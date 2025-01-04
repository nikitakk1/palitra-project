





document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slidebi');
    const slides = document.querySelectorAll('.slidebi img');
    const navLinks = document.querySelectorAll('.slid-nav a');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    let currentIndex = 0;

    function updateSlider(index) {
        // Update active slide
        slidesContainer.scrollLeft = slides[index].offsetLeft;

        // Update active navigation dot
        navLinks.forEach((link, i) => {
            link.style.backgroundColor = i === index ? '#fd8255' : '#ccc';
        });

        currentIndex = index;
    }

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            updateSlider(index);
        });
    });

    leftArrow.addEventListener('click', () => {
        updateSlider(Math.max(currentIndex - 1, 0));
    });

    rightArrow.addEventListener('click', () => {
        updateSlider(Math.min(currentIndex + 1, slides.length - 1));
    });

    updateSlider(0);
});