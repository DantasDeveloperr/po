const getPokeminUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const generantePokemonPromises = () => Array(151).fill().map((_, index) => 
  fetch(getPokemonUrl(index + 1)).then(response => response.json())) 

const generateHTML = pokemons => pokemons.reduce((accumulator, pokemon) => {
    const type = pokemon.type.map(typeInfo => typeInfo.type.name)

    accumulator += `
            <li class="card  ${type[0]}">
            <img class="card-imge" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-sutitle">${type.join(' | ')}</p>
            </li>
            `
            return accumulator
        }, '')

const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = pokemons
}

  const pokemonPromises = generatePokemonPromises()

Promise.all(pokemonPromises)
    .then(generateHTML)
    .then(insertPokemonsIntoPage)
    