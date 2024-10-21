const snowContainer = document.querySelector('.snow');

function createSnow() {
    const snow = document.createElement('div');
    snow.classList.add('drop');
    snow.style.left = Math.random() * 100 + 'vw'; // Vị trí ngẫu nhiên trên màn hình
    snow.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Thời gian rơi ngẫu nhiên
    snowContainer.appendChild(snow);

    // Xóa bông tuyết sau khi rơi xong
    setTimeout(() => {
        snow.remove();
    }, (parseFloat(snow.style.animationDuration) * 1000) + 1000); // Thời gian xóa bông tuyết dựa trên thời gian rơi
}

// Tạo ra 5 bông tuyết mỗi giây
setInterval(createSnow, 200); // Bạn có thể thay đổi 200 thành 1000 nếu muốn ít bông tuyết hơn
