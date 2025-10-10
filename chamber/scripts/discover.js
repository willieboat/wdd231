const hamBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    const ts = document.getElementById("timestamp");
    if (ts && !ts.value) {
        ts.value = new Date().toLocaleString();
    }
});

const container = document.querySelector("#discoverContainer");
const visitorMessage = document.querySelector("#visitorMessage");

async function loadDiscoverData() {
    const response = await fetch("data/discover.json");
    const items = await response.json();
    displayItems(items);
}

function displayItems(items) {
    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
      <h2>${item.name}</h2>
      <figure><img src="${item.image}" alt="${item.name}" width="300" height="200" loading="lazy"></figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn More</button>
    `;
        container.appendChild(card);
    });
}

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysBetween < 1) {
        visitorMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        visitorMessage.textContent = `You last visited ${daysBetween} day ago.`;
    } else {
        visitorMessage.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

loadDiscoverData();


document.getElementById('currentYear').textContent =
    new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;