// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
const getAllFirePokemons = (pokemonsArray) => {
  return pokemonsArray.filter(pokemon => pokemon.type.includes('Fire'))
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
const shortestPokemon = (pokemonsArray) => {
  const pokemonNames = pokemonsArray.map(pokemon => pokemon.name).sort((a, b) => a.length - b.length)
  if (pokemonsArray.length === 0){
    return 0
  } else {
    return pokemonNames[0]
  }
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
const candyAverage = (pokemonsArray) => {
  const candyCount = pokemonsArray.reduce((sum, pokemon) => {
    if (pokemon.candy_count !== undefined){
      return sum + pokemon.candy_count
    } else {
      return sum
    }
  }, 0)
  
  if (pokemonsArray.length === 0){
    return 0
  } else {
    return Math.round((candyCount/pokemonsArray.length)*100)/100
  }
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
const getGroundPokeImg = (pokemonsArray) => {
  if (pokemonsArray.length === 0) {
    return 0
  } else {
    return pokemonsArray.filter(pokemon => pokemon.type.includes('Ground')).slice(0, 10).map(pokemon => pokemon.img)
  }
}
// Iteration 5: Find all pokemon names heavier than Pikachu
const getHeavyPokemons = (pokemonsArray) => {
  const weightPikachu = pokemonsArray.filter(pokemon => pokemon.name === 'Pikachu').map(pikachu => pikachu.weight)
  const heavyPokemons = pokemonsArray.filter(pokemon => parseFloat(pokemon.weight) > parseFloat(weightPikachu)).map(pokemon => pokemon.name)
  if (pokemonsArray.length === 0){
    return 0
  } else {
    return heavyPokemons
  }
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
const orderAlphabetically = (pokemonsArray) => {
  const alphabeticallyOrder = pokemonsArray.map(pokemon => pokemon.name.toLowerCase()).sort()
  return alphabeticallyOrder.slice(0, 20)
}
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
const strongPokemons = (pokemonsArray) => {
  const oneWeakness = pokemonsArray.filter(pokemon => pokemon.weaknesses.length <= 1).map(pokemon => pokemon.name)
  return oneWeakness.slice(0, 15)
}