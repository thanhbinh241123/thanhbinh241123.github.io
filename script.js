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
const toggleSwitch = document.getElementById('darkModeToggle');
const body = document.body;
const backgroundMusic = document.getElementById('backgroundMusic');

// Kiểm tra trạng thái hiện tại trong localStorage để duy trì chế độ sau khi tải lại trang
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true; // Đánh dấu checkbox khi bật chế độ tối
    backgroundMusic.play(); // Phát nhạc khi chế độ tối được bật
}

// Lắng nghe sự kiện khi người dùng thay đổi chế độ tối
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled'); // Lưu trạng thái vào localStorage
        backgroundMusic.play(); // Phát nhạc khi bật chế độ tối
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled'); // Lưu trạng thái vào localStorage
        backgroundMusic.pause(); // Dừng nhạc khi tắt chế độ tối
    }
});
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        h1.classList.add('dark-mode'); 
        p.classList.add('dark-mode'); 
        socialLinks.forEach(link => {
            link.classList.add('dark-mode'); // Thêm lớp dark-mode cho biểu tượng
            link.style.animation = "move-icons 5s linear infinite"; // Bắt đầu hoạt ảnh
        });
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        h1.classList.remove('dark-mode'); 
        p.classList.remove('dark-mode'); 
        socialLinks.forEach(link => {
            link.classList.remove('dark-mode'); // Loại bỏ lớp dark-mode khi tắt chế độ tối
            link.style.animation = ""; // Dừng hoạt ảnh
        });
        localStorage.setItem('dark-mode', 'disabled');
    }
});



