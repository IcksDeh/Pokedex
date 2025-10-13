let allPokemon = [];
let detailPokemonInfo = [];
let offset = 0;

function init(){
    showLoadingSpinner();
    loadPokemon();
}

async function loadPokemon (){
    const fetchPokemonAPI = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    const pokemon = await fetchPokemonAPI.json();

    allPokemon = pokemon.results;
    fetchSinglePokemon(); 
}

async function fetchSinglePokemon(){
    
    for (let pokeIndex = 0; pokeIndex < allPokemon.length; pokeIndex++) {
        let fetchSinglePokemonByApi = await fetch (allPokemon[pokeIndex].url);
        let singlePokemon = await fetchSinglePokemonByApi.json();
        detailPokemonInfo.push(singlePokemon); 
        // fetchShowAbilities(pokeIndex);
    }
    console.log(detailPokemonInfo);
    removeLoadingSpinner();
    showPokemon();
}

// async function fetchShowAbilities(pokeIndex) {
//     for (let Index = 0; Index < detailPokemonInfo[pokeIndex].forms.length; Index++) {
//         let fetchEachAbility = await fetch (detailPokemonInfo[pokeIndex].stats[Index].stat.url);
//         let eachAbility = await fetchEachAbility.json();
//         console.log(eachAbility);   
//     }
// }

function showPokemon(){
    let showPokemonInHTML = document.getElementById("id_show_pokemon");
    showPokemonInHTML.innerHTML = "";
    for (let pokeIndex = 0; pokeIndex < detailPokemonInfo.length; pokeIndex++) {
        showPokemonInHTML.innerHTML += templatePokemonCard(pokeIndex);
        showTypeEachPokemon(pokeIndex);
    }
    showCatchNextButton();
}

function showTypeEachPokemon(pokeIndex) {
    let showLabelEachPokemon = document.getElementById("id_sort_lable_type_pokemon"+pokeIndex);
    for (let typeIndex = 0; typeIndex < detailPokemonInfo[pokeIndex].types.length; typeIndex++) {
        showLabelEachPokemon.innerHTML += templateLabelEachPokemon(typeIndex, pokeIndex);
    }
}

function showLoadingSpinner(){
    let loadingSpinner = document.getElementById('id_loading_spinner');
    loadingSpinner.classList.remove('d_none');
    // disableCatchNextPokemonBtn();
}

// function disableCatchNextPokemonBtn(){
//     let catchNextPokemonBtn = document.getElementById("id_button_catch_next_pokemon");
//     catchNextPokemonBtn.disabled = true;
// }

function enableCatchNextPokemonBtn(){
    let catchNextPokemonBtn = document.getElementById("id_button_catch_next_pokemon");
    catchNextPokemonBtn.disabled = false;
}

function removeLoadingSpinner(){
    let loadingSpinner = document.getElementById('id_loading_spinner');
    loadingSpinner.classList.add('d_none');
    enableCatchNextPokemonBtn();
}

function showCatchNextButton(){
    let buttonCatchNext = document.getElementById('id_area_catch_next_pokemon');
    buttonCatchNext.innerHTML = templateCatchNextButton();
}

async function loadMorePokemon(){
    showLoadingSpinner();
    offset += 5; 
    let morePokemon = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`;
    const fetchPokemonAPI = await fetch(morePokemon);
    const pokemon = await fetchPokemonAPI.json();
    allPokemon = pokemon.results;
    fetchSinglePokemon();
}

function filterbyName(event){
    const searchTerm = event.target.value;
    detailPokemonInfo.forEach(function(pokemon, index){
        let pokeName = pokemon.name.toLowerCase();
        let eachPokeCard = document.getElementById("id_pokemon_card"+index);
        if (pokeName.includes(searchTerm)){
            eachPokeCard.classList.remove('d_none');
        } else {
            eachPokeCard.classList.add('d_none');
        }
    }
)
}
