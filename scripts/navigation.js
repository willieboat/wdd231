const hamBtn = document.querySelector("#ham-btn");
const nav = document.querySelector("#nav-bar");
const icon = hamBtn.querySelector(".icon");

hamBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamBtn.classList.toggle("open");

    // toggle hamburger / close symbol
    icon.textContent = hamBtn.classList.contains("open") ? "✖" : "☰";
});

// footer date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
