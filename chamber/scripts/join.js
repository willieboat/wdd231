const hamBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    const ts = document.getElementById("timestamp");
    if (ts && !ts.value) {
        ts.value = new Date().toLocaleString(); // friendlier format
    }
});

document.getElementById('currentYear').textContent =
    new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;
