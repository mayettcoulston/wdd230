const container = document.querySelector('#members-container');
const gridBtn = document.querySelector('#grid-view');
const listBtn = document.querySelector('#list-view');

const url = 'https://mayettcoulston.github.io/wdd230/data/members.json';

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
}

function displayMembers(members) {
    container.innerHTML = ''; // clear
    members.forEach(member => {
        const card = document.createElement('section');
        card.innerHTML = `
            <img src="images/${member.image || 'default.jpg'}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>Membership: ${member.membership}</p>
            <p>${member.description}</p>
        `;
        container.appendChild(card);
    });
}

gridBtn.addEventListener('click', () => {
    container.classList.add('grid');
    container.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    container.classList.add('list');
    container.classList.remove('grid');
});

getMembers();
