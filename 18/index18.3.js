function mockImageRequest(images, time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(images), time);
    });
}

function progress(time, progressBarId, onComplete) {
    const progressBar = document.getElementById(progressBarId);
    let elapsed = 0;

    const interval = setInterval(() => {
        elapsed++;
        progressBar.style.width = `${(elapsed / time) * 100}%`;

        if (elapsed >= time) {
            clearInterval(interval);
            progressBar.style.width = '100%';
            onComplete();
        }
    }, 1000);
}

function loadImagesIntoRow(images, rowId) {
    const row = document.getElementById(rowId);
    images.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.onload = () => (img.style.display = 'block');
        row.appendChild(img);
    });
}

// Массивы URL-адресов для картинок
const catImages = [
    "18.1.jpg",
    "18.2.jpg",
    "18.3.jpg"
];

const dogImages = [
    "18.4.jpg",
    "18.5.jpg",
    "18.6.jpg"
];

// Обработка загрузки изображений
function startLoading() {
    const catTime = Math.floor(Math.random() * 3) + 2; // от 2 до 5 секунд
    const dogTime = Math.floor(Math.random() * 3) + 2;

    progress(catTime, 'progress-bar-1', () => {
        mockImageRequest(catImages, catTime * 1000).then((images) => {
            loadImagesIntoRow(images, 'image-row-1');
        });
    });

    progress(dogTime, 'progress-bar-2', () => {
        mockImageRequest(dogImages, dogTime * 1000).then((images) => {
            loadImagesIntoRow(images, 'image-row-2');
        });
    });
}

// Запуск при загрузке страницы
startLoading();