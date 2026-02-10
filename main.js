function darkmode() {
  var element = document.body;
  element.classList.toggle("light-mode");

}

// Data van API laden van Arvid

const apiURL = 'https://fdnd.directus.app/items/person/283'
const parentElement = document.querySelector('.profiel')

fetchJson(apiURL).then(function (response) {
  console.log(response.data)
  parentElement.innerHTML = `
    <img class="avatar" src="${response.data.avatar}" alt="${response.data.name}" />
    <h2 class="name">${response.data.name}</h2>
    <h3 class="nickname">${response.data.nickname}</h3>
    <p class="bio">${response.data.bio}</p>
    <p class="birthdate">${response.data.birthdate}</p>
  `
})

async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}

// Data van API laden via zoekbalk

const parentElement_klas = document.querySelector('.api_klas');
const searchInput = document.querySelector('#ID-search');
const searchBtn = document.querySelector('#search-button');

searchBtn.addEventListener("click", () => {
  const id = searchInput.value.trim();
  if (!id) return;
  loadKlasgenoot(id);
});

loadKlasgenoot(39);

async function loadKlasgenoot(id) {
  const apiURL_klas = `https://fdnd.directus.app/items/person/${id}`;

  const response = await fetchJson(apiURL_klas);
  console.log(response.data);

  parentElement_klas.innerHTML = `
    <img class="avatar" src="${response.data.avatar}" alt="${response.data.name}" />
    <h2 class="name">${response.data.name}</h2>
    <h3 class="nickname">${response.data.nickname}</h3>
    <p class="bio">${response.data.bio}</p>
    <p class="birthdate">${response.data.birthdate}</p>
  `;
}
