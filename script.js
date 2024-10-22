const snowContainer = document.querySelector('.snow');
const toggleSwitch = document.getElementById('darkModeToggle');
const body = document.body;
const qrCode = document.querySelector('.qr-code');
const socialLinks = document.querySelector('.social-links'); // Lấy phần tử chứa biểu tượng mạng xã hội
const backgroundMusic = document.getElementById('backgroundMusic');

function createSnow() {
    const snow = document.createElement('div');
    snow.classList.add('drop');
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowContainer.appendChild(snow);

    setTimeout(() => snow.remove(), (parseFloat(snow.style.animationDuration) * 1000) + 1000);
}

setInterval(createSnow, 200);

function toggleDarkMode(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        qrCode.style.display = 'block'; // Hiển thị mã QR
        socialLinks.style.display = 'flex'; // Hiển thị biểu tượng mạng xã hội
        backgroundMusic.play();
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        qrCode.style.display = 'none'; // Ẩn mã QR
        socialLinks.style.display = 'none'; // Ẩn biểu tượng mạng xã hội
        backgroundMusic.pause();
        localStorage.setItem('dark-mode', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const isDarkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';
    toggleDarkMode(isDarkModeEnabled);
    toggleSwitch.checked = isDarkModeEnabled; // Đánh dấu checkbox
});

toggleSwitch.addEventListener('change', () => {
    toggleDarkMode(toggleSwitch.checked);
});
// Kiểm tra localStorage để xem chế độ tối có được bật hay không
if (!localStorage.getItem('dark-mode')) {
    document.body.classList.remove('dark-mode'); // Đặt chế độ sáng là mặc định
}

// Khi nhấn nút chuyển đổi chế độ tối
document.querySelector('.switch input').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true'); // Lưu chế độ tối
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.removeItem('dark-mode'); // Xóa chế độ tối
    }
});

