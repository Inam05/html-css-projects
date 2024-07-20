const items = document.querySelectorAll('.image-container img, .image-container video');
const textContainers = document.querySelectorAll('.text-container');
let currentIndex = 0;

function showText(index) {
    textContainers.forEach(container => {
        container.style.display = 'none';
    });
    textContainers[index].style.display = 'block';
}

function nextSlide() {
    textContainers.forEach(container => {
        container.style.display = 'none';
    });
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].style.display = 'block';
    showText(currentIndex);
}

items[currentIndex].style.display = 'block';
showText(currentIndex);
setInterval(nextSlide, 10000);
