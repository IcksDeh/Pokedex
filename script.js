function init(){
    loadPokemon()
}

async function loadPokemon (){
    let fetchPokemonAPI = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    let pokemon = fetchPokemonAPI.json();
    console.log(pokemon);
}