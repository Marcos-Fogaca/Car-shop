let currentIndex = 0;
const items = document.querySelectorAll('.list .item');
const totalItems = items.length;
const indicators = document.querySelectorAll('.indicators ul li');
const arrows = document.querySelectorAll('.arrows button');

function updateDisplay() {
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.transform = 'translateX(0)';
        } else if (index < currentIndex) {
            item.style.transform = 'translateX(-100vw)';
        } else {
            item.style.transform = 'translateX(100vw)';
        }
    });

    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    const numberDisplay = document.querySelector('.indicators .number');
    numberDisplay.innerText = `0${currentIndex + 1}`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateDisplay();
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateDisplay();
}

arrows[0].addEventListener('click', showPrevious);
arrows[1].addEventListener('click', showNext);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateDisplay();
    });
});

updateDisplay();
