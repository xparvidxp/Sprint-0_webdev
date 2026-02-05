function darkmode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

const apiURL = 'https://fdnd.directus.app/items/person/283'
const parentElement = document.querySelector('main')

parentElement.classList.add('loading')

fetchJson(apiURL).then(function (response) {
  console.log(response.data)
  parentElement.innerHTML = `
  <article class="content">
    <img class="avatar" src="${response.data.avatar}" alt="${response.data.name}" />
    <h2 class="name">${response.data.name}</h2>
    <h3 class="nickname">${response.data.nickname}</h3>
    <p class="bio">${response.data.bio}</p>
    <p class="birthdate">${response.data.birthdate}</p>
  </article>
  `
  parentElement.classList.remove('loading')
})

async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}