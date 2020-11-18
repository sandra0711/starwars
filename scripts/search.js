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
  if (input.value) {
    starWars.searchCharacters(input.value)
      .then(character => {
        spinner.style.visibility = 'hidden';
        planetLink = character.results[0].homeworld;
        planetId = planetLink.match(/\d+/);
        console.log(planetId);
        return starWars.searchPlanets(planetId)
          .then(planet => {
            console.log(planet);
            content.innerHTML =
              `${character.results[0].name} <br> year of birth: ${character.results[0].birth_year} <br> eye color: ${character.results[0].eye_color} <br> home world: ${planet.name}`
            container.style.visibility = 'visible';
            delButton.addEventListener('click', function () {
              container.style.visibility = 'hidden';
            })
          })
      })
  }
})


