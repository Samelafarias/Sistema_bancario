document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const cardWidth = 300;
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselContainer.children.length - 1) {
            currentIndex++;
            carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });
});
