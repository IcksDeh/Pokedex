let dialogOverlay = document.getElementById("id_overlay_pokemon");

function checkPokemonOverlay(pokeIndex) {
 let activeArray = searchIsActivated ? filteredPokemon : detailPokemonInfo;
  let currentPokemonIndex = activeArray.findIndex(pokemon => pokemon.id === detailPokemonInfo[pokeIndex].id);
  showPokemonOverlay(currentPokemonIndex, activeArray);
}

function showPokemonOverlay(pokeIndex, activeArray){
  const showPokemonDetails = document.getElementById("id_overlay_pokemon");
  removeBackgroundColor();
  showPokemonDetails.classList.add(activeArray[pokeIndex].types[0].type.name + "_background");
  showPokemonDetails.showModal();
  showPokemonDetails.innerHTML = templateOverlayPokemonDetails(pokeIndex, activeArray);
  checkDisableButton(pokeIndex, activeArray);
  lockScrolling(true);
}

function checkDisableButton(pokeIndex, array) {
  const previousButton = document.getElementById("id_previous_button");
  const nextButton = document.getElementById("id_next_button");

  previousButton.disabled = pokeIndex === 0;
  nextButton.disabled = pokeIndex === array.length - 1
}

function removeBackgroundColor() {
  const showPokemonDetails = document.getElementById("id_overlay_pokemon");
  showPokemonDetails.classList.forEach((cls) => {
    if (cls.endsWith("_background")) {
      showPokemonDetails.classList.remove(cls);
    }
  });
}

function closeOverlay() {
  const showPokemonDetails = document.getElementById("id_overlay_pokemon");
  showPokemonDetails.close();
  lockScrolling(false);
}

dialogOverlay.addEventListener("close", () => {
    lockScrolling(false);
  })

function lockScrolling(show){
  const scorlling = document.getElementById("id_body");
  scorlling.classList.toggle("lock_scroll", show);
}

function changePokemon(pokeIndex, direction){
  let newPokeIndex = pokeIndex + direction;
  let activeArray = searchIsActivated ? filteredPokemon : detailPokemonInfo;
  if(newPokeIndex >=0 && newPokeIndex < activeArray.length)
      showPokemonOverlay(newPokeIndex, activeArray);
      checkDisableButton(newPokeIndex, activeArray);
 }

function loadPokemonMoves(pokeIndex, array) {
  if (array[pokeIndex].moves.length >= 8) {
    loadAllPokemonMoves(pokeIndex, 8, array)
  } else {
    loadAllPokemonMoves(pokeIndex, array[pokeIndex].moves.length, array);
  }
}

function loadAllPokemonMoves(pokeIndex, countOfMoves, array){
  const showPokemonMoves = document.getElementById("show_pokemon_moves" + pokeIndex);
  showPokemonMoves.innerHTML = "";
  for (let moveIndex = 0; moveIndex < countOfMoves; moveIndex++) {
    showPokemonMoves.innerHTML += showPokemonMoveTemplate(pokeIndex, moveIndex, array);
  }
}

function showInformation(pokeIndex, target) {
  let activeArray = searchIsActivated ? filteredPokemon : detailPokemonInfo;
  const categories = ['general','stats','moves'];
  categories.forEach(elementInCategories => {
    if(elementInCategories == target){
      showDetailInformation(pokeIndex,elementInCategories, true);
      checkLoadMoves(pokeIndex,elementInCategories, activeArray);
    } else{
      showDetailInformation(pokeIndex,elementInCategories, false);
    }
  })
}

function showDetailInformation(pokeIndex,elementInCategories, show){
  let showDetails = document.getElementById("id_" +elementInCategories + "_information" + pokeIndex);
  let adjustButton = document.getElementById("button_" +elementInCategories + "_information" + pokeIndex);

  showDetails.classList.toggle("d_none", !show);
  adjustButton.classList.toggle("button_information_activiated", show);
}

function checkLoadMoves(pokeIndex, target, array){
    if( target == "moves"){
    loadPokemonMoves(pokeIndex, array);
    }
  }

function CheckShowImagePokemon(pokeIndex, target){
  const pokeImages = ['normal', 'shiny'];
  pokeImages.forEach(pokeImageElement =>{
    if(pokeImageElement==target){
      showImagePokemon(pokeIndex,pokeImageElement, true);
    } else{
      showImagePokemon(pokeIndex,pokeImageElement, false);
    }
  })
}

function showImagePokemon(pokeIndex,pokeImageElement, show){
  let adjustButton = document.getElementById("button_"+pokeImageElement+"_pokemon"+pokeIndex);
  let showImage = document.getElementById(pokeImageElement+"_pokemon_image" + pokeIndex);

  adjustButton.classList.toggle("button_information_activiated", show);
  showImage.classList.toggle("d_none", !show);
}
