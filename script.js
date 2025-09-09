let allPokemon = [];

function init(){
    loadPokemon()
}

async function loadPokemon (){
    let fetchPokemonAPI = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
        console.log(fetchPokemonAPI);
    let pokemon = await fetchPokemonAPI.json();
        console.log(pokemon);
    allPokemon = pokemon.results;

        console.log(allPokemon);
   
    showPokemon();
    
}

function showPokemon(){
    let showPokemonInHTML = document.getElementById("id_show_pokemon");
    for (let pokeIndex = 0; pokeIndex < allPokemon.length; pokeIndex++) {
        showPokemonInHTML.innerHTML += templatePokemonCard(pokeIndex);
        
        console.log(allPokemon[pokeIndex].url);

        fetchSinglePokemon(allPokemon[pokeIndex].url);
    }
}

async function fetchSinglePokemon(url){
    let fetchSinglePokemonByApi = await fetch (url);
    let singlePokemon = await fetchSinglePokemonByApi.json();
    console.log(singlePokemon); 
}