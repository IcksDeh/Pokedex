let allPokemon = [];
let detailPokemonInfo = [];
let offset = 0;
let searchTermInputfield = 0;
let filteredPokemon = [];

function init() {
  loadingSpinner(true);
  loadPokemon();
}

async function loadPokemon() {
  const fetchPokemonAPI = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
  const pokemon = await fetchPokemonAPI.json();

  allPokemon = pokemon.results;
  fetchSinglePokemon();
}

async function fetchSinglePokemon() {
  for (let pokeIndex = 0; pokeIndex < allPokemon.length; pokeIndex++) {
    let fetchSinglePokemonByApi = await fetch(allPokemon[pokeIndex].url);
    let singlePokemon = await fetchSinglePokemonByApi.json();
    detailPokemonInfo.push(singlePokemon);
  }
  loadingSpinner(false)
  showPokemon();
  console.log(detailPokemonInfo);
}

function showPokemon() {
  const showPokemonInHTML = document.getElementById("id_show_pokemon");
  showPokemonInHTML.innerHTML = "";
  for (let pokeIndex = 0; pokeIndex < detailPokemonInfo.length; pokeIndex++) {
    showPokemonInHTML.innerHTML += templatePokemonCard(pokeIndex);
    showTypeEachPokemon(pokeIndex);
  }
  showCatchNextButton();
}

function showTypeEachPokemon(pokeIndex) {
  let showLabelEachPokemon = document.getElementById("id_sort_lable_type_pokemon" + pokeIndex);
  for (let typeIndex = 0;typeIndex < detailPokemonInfo[pokeIndex].types.length;typeIndex++) {
    showLabelEachPokemon.innerHTML += templateLabelEachPokemon(typeIndex,pokeIndex);
  }
}

function loadingSpinner(show){
  const loadingSpinner = document.getElementById("id_loading_spinner");
  loadingSpinner.classList.toggle("d_none", !show);
  checkVisibilityCatchNextButton();
}

function checkVisibilityCatchNextButton(){
  const catchNextPokemonBtn = document.getElementById("id_button_catch_next_pokemon");
    if (catchNextPokemonBtn != null){
      if(catchNextPokemonBtn.disabled == true){
        catchNextPokemonBtn.disabled = false;
      } else {catchNextPokemonBtn.disabled = true}
  }
}

function showCatchNextButton() {
  const buttonCatchNext = document.getElementById("id_area_catch_next_pokemon");
  buttonCatchNext.innerHTML = templateCatchNextButton();
}

async function loadMorePokemon() {
  loadingSpinner(true);
  document.getElementById("id_search_pokemon").value = "";
  offset += 20;
  const morePokemon = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;
  const fetchPokemonAPI = await fetch(morePokemon);
  const pokemon = await fetchPokemonAPI.json();
  allPokemon = pokemon.results;
  fetchSinglePokemon();
}

function filterbyName(event) {
  let searchTerm = event.target.value;
  searchTermInputfield = searchTerm;
  if (searchTerm.length >= 3) {
    showFilteredPokemon(searchTerm);
  } else {
    detailPokemonInfo.forEach((pokemon, index) => {
      const eachPokeCard = document.getElementById("id_pokemon_card" + index);
      eachPokeCard.classList.remove("d_none");
    });
  }
}

function showFilteredPokemon(searchTerm) {
  filteredPokemon = [];
  detailPokemonInfo.forEach((pokemon, index) => {
    let pokeName = pokemon.name.toLowerCase();
    const eachPokeCard = document.getElementById("id_pokemon_card" + index);
    eachPokeCard.classList.toggle("d_none", !pokeName.includes(searchTerm));
    if(pokeName.includes(searchTerm)){
      filteredPokemon.push(pokemon);
    }
  });
}
