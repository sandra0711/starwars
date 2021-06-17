// const fs = require("fs").promises;
// const fsOld = require("fs");


// Методы, которые могут пригодиться:
// starWars.searchPlanets(query), 
// starWars.searchSpecies(query).
// starWars.getCharactersById(id), 
// starWars.getPlanetsById(id), 
// starWars.getSpeciesById(id)

// Тут ваш код.


const searchButton = document.querySelector('#byQueryBtn');
const input = document.querySelector('input');
const spinner = document.querySelector('.spinner');
const container = document.querySelector('#result-container');
const messageHeader = document.querySelector('.message-header');
const content = document.querySelector('#content');
const delButton = document.querySelector('.delete');

searchButton.addEventListener('click', function () {
  spinner.style.visibility = 'visible';
  if (input.value) {
    let selectedSearch = selectSearch.value;
    let characterSearch = [];
    if (selectedSearch == 'character') {
      starWars.searchCharacters(input.value)
        .then(character => {
          planetLink = character.results[0].homeworld;
          planetId = String(planetLink.match(/\d+/));
          characterSearch = character.results[0];
          console.log(characterSearch)
          return starWars.searchPlanets(planetId);
        })
        .then(planet => {
          content.innerHTML =
            `${characterSearch.name} <br> year of birth: ${characterSearch.birth_year} <br> eye color: ${characterSearch.eye_color} <br> home world: ${planet.name}`
          container.style.visibility = 'visible';
          delButton.addEventListener('click', function () {
            container.style.visibility = 'hidden';
          })
          spinner.style.visibility = 'hidden';
        })
    }
    else if (selectedSearch == 'species') {
      starWars.searchSpecies(input.value)
        .then(species => {
          characterSearch = species.results[0];
          console.log(characterSearch)
          spinner.style.visibility = 'hidden';
          container.style.visibility = 'visible';
          content.innerHTML = `${characterSearch.name}`;
        })
        // .catch(err => console.log('Wrong input'))
    }
  }
  // spinner.styl e.visibility = 'hidden';
})

// let selectedSearch = selectSearch.value;
//   if (selectedSearch=='character') {

//     spinner.style.visibility = 'hidden';
