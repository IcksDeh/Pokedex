let allPokemon = [];
let detailPokemonInfo = []; 

function init(){
    loadPokemon()
}

async function loadPokemon (){
    const fetchPokemonAPI = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    const pokemon = await fetchPokemonAPI.json();

    allPokemon = pokemon.results;
    fetchSinglePokemon(); 
}

async function fetchSinglePokemon(){
    
    for (let pokeIndex = 0; pokeIndex < allPokemon.length; pokeIndex++) {
        
        let fetchSinglePokemonByApi = await fetch (allPokemon[pokeIndex].url);
        let singlePokemon = await fetchSinglePokemonByApi.json();
        detailPokemonInfo.push(singlePokemon); 
    }
    console.log(detailPokemonInfo);
    showPokemon();
}

function showPokemon(){
    let showPokemonInHTML = document.getElementById("id_show_pokemon");
    for (let pokeIndex = 0; pokeIndex < detailPokemonInfo.length; pokeIndex++) {
        showPokemonInHTML.innerHTML += templatePokemonCard(pokeIndex);

    }
}

