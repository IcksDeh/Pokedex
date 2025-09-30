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
    }
    console.log(detailPokemonInfo);
    removeLoadingSpinner();
    showPokemon();

}

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

function showPokemonOverlay(pokeIndex){
    let showPokemonDetails = document.getElementById('id_overlay_pokemon');
    removeBackgroundColor();
    showPokemonDetails.classList.remove('d_none');
    showPokemonDetails.classList.add(detailPokemonInfo[pokeIndex].types[0].type.name +'_background');
    showPokemonDetails.innerHTML = templateOverlayPokemonDetails(pokeIndex);
}

function removeBackgroundColor(){
    let showPokemonDetails = document.getElementById('id_overlay_pokemon');
    showPokemonDetails.classList.forEach(cls => {
        if (cls.endsWith("_background")){
            showPokemonDetails.classList.remove(cls);
        }
    }
    )
}

function closeOverlay(){
    let showPokemonDetails = document.getElementById('id_overlay_pokemon');
    showPokemonDetails.classList.add('d_none');
}

function showLoadingSpinner(){
    let loadingSpinner = document.getElementById('id_loading_spinner');
    loadingSpinner.classList.remove('d_none');
}

function removeLoadingSpinner(){
    let loadingSpinner = document.getElementById('id_loading_spinner');
    loadingSpinner.classList.add('d_none');
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

function showPreviousPokemon(pokeIndex){
    let previousPokemon = pokeIndex - 1;
    if (previousPokemon >= 0){
        showPokemonOverlay(previousPokemon);
    }
    
}

function showNextPokemon(pokeIndex){
    let nextPokemon = pokeIndex + 1;
    if(nextPokemon < detailPokemonInfo.length){
        showPokemonOverlay(nextPokemon);
    }
}

function filterbyName(event){
    const searchTerm = event.target.value;
    let pokeList = detailPokemonInfo.map(pokemon => pokemon.name);
    let pokeCard = document.querySelectorAll('.class_pokemon_card');
    console.log(pokeCard);

    pokeList.forEach(function(pokeName){
        if (pokeName.includes(searchTerm)){
            
        } else {
            pokeCard.element.classList.add('d_none');
        }

    }

)
}
