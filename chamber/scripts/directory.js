const hamBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

const membersContainer = document.querySelector('.members');

async function loadMembers() {
    try {
        const response = await fetch('data/directory.json');
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');
        card.innerHTML = `<img src="${member.image}" alt="Logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
    `;
        membersContainer.appendChild(card);
    });
}

const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;

loadMembers();

