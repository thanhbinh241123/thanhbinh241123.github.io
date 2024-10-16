const snowContainer = document.querySelector('.snow');

function createSnow() {
    const snow = document.createElement('div');
    snow.classList.add('drop');
    snow.style.left = Math.random() * 100 + 'vw'; // Vị trí ngẫu nhiên trên màn hình
    snow.style.animationDuration = Math.random() * 3 + 2 + 's'; // Thời gian rơi ngẫu nhiên
    snowContainer.appendChild(snow);

    // Xóa bông tuyết sau khi rơi xong
    setTimeout(() => {
        snow.remove();
    }, 5000); // Thời gian phù hợp với thời gian rơi
}

// Tạo ra 10 bông tuyết mỗi giây
setInterval(createSnow, 200);
