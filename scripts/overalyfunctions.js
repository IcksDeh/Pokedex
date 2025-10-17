let dialogOverlay = document.getElementById("id_overlay_pokemon");

function showPokemonOverlay(pokeIndex) {
  let showPokemonDetails = document.getElementById("id_overlay_pokemon");
  removeBackgroundColor();showPokemonDetails.classList.add(detailPokemonInfo[pokeIndex].types[0].type.name + "_background");
  showPokemonDetails.showModal();
  showPokemonDetails.innerHTML = templateOverlayPokemonDetails(pokeIndex);
  checkDisableButton(pokeIndex);
  lockScrolling();
}

function lockScrolling() {
  let lockScroll = document.getElementById("id_body");
  lockScroll.classList.add("lock_scroll");
}

function checkDisableButton(pokeIndex) {
  if (pokeIndex == 0) {
    document.getElementById("id_previous_button").disabled = true;
  }

  if (pokeIndex == detailPokemonInfo.length - 1) {
    document.getElementById("id_next_button").disabled = true;
  }
}

function removeBackgroundColor() {
  let showPokemonDetails = document.getElementById("id_overlay_pokemon");
  showPokemonDetails.classList.forEach((cls) => {
    if (cls.endsWith("_background")) {
      showPokemonDetails.classList.remove(cls);
    }
  });
}

function closeOverlay() {
  let showPokemonDetails = document.getElementById("id_overlay_pokemon");
  showPokemonDetails.close();
  unlockScrolling();
}

dialogOverlay.addEventListener("click", (event) => {
  if (event.target == dialogOverlay) {
    dialogOverlay.close();
    unlockScrolling();
  }
});

function unlockScrolling() {
  let lockScroll = document.getElementById("id_body");
  lockScroll.classList.remove("lock_scroll");
}

function showPreviousPokemon(pokeIndex) {
  let previousPokemon = pokeIndex - 1;
  if (previousPokemon >= 0) {
    showPokemonOverlay(previousPokemon);
  }
}

function showNextPokemon(pokeIndex) {
  let nextPokemon = pokeIndex + 1;
  if (nextPokemon < detailPokemonInfo.length) {
    showPokemonOverlay(nextPokemon);
  }
}

function loadPokemonMoves(pokeIndex) {
  if (detailPokemonInfo[pokeIndex].moves.length >= 8) {
    loadEightPokemonMoves(pokeIndex);
  } else {
    loadAllPokemonMoves(pokeIndex);
  }
}

function loadEightPokemonMoves(pokeIndex) {
  let showPokemonMoves = document.getElementById(
    "show_pokemon_moves" + pokeIndex
  );
  showPokemonMoves.innerHTML = "";
  for (let moveIndex = 0; moveIndex < 8; moveIndex++) {
    showPokemonMoves.innerHTML += showPokemonMoveTemplate(pokeIndex, moveIndex);
  }
}

function loadAllPokemonMoves(pokeIndex) {
  let showPokemonMoves = document.getElementById(
    "show_pokemon_moves" + pokeIndex
  );
  showPokemonMoves.innerHTML = "";
  for (
    let moveIndex = 0;
    moveIndex < detailPokemonInfo[pokeIndex].moves.length;
    moveIndex++
  ) {
    showPokemonMoves.innerHTML += showPokemonMoveTemplate(pokeIndex, moveIndex);
  }
}

function showInformation(pokeIndex, target) {
  let categories = ['general','stats','moves'];
  categories.forEach(elementInCategories => {
    if(elementInCategories == target){
      showDetailInformation(pokeIndex,elementInCategories);
      checkLoadMoves(pokeIndex,elementInCategories);
    } else{
      hideDetailInformation(pokeIndex,elementInCategories);
    }
  })
}

function showDetailInformation(pokeIndex, elementInCategories){
  document.getElementById("id_" +elementInCategories + "_information" + pokeIndex).classList.remove("d_none");
  document.getElementById("button_" +elementInCategories + "_information" + pokeIndex).classList.add("button_information_activiated");
}

function hideDetailInformation(pokeIndex,elementInCategories){
  document.getElementById("id_"+ elementInCategories +"_information" + pokeIndex).classList.add("d_none");
  document.getElementById("button_" +elementInCategories + "_information" + pokeIndex).classList.remove("button_information_activiated");
}

function checkLoadMoves(pokeIndex, target){
    if( target == "moves"){
    loadPokemonMoves(pokeIndex);
    }
  }

function CheckShowImagePokemon(pokeIndex, target){
  let pokeImages = ['normal', 'shiny'];
  pokeImages.forEach(pokeImageElement =>{
    if(pokeImageElement==target){
      showImagePokemon(pokeIndex,pokeImageElement);
    } else{
      hideImagePokemon(pokeIndex,pokeImageElement);
    }
  })
}

function showImagePokemon(pokeIndex,pokeImageElement){
  document.getElementById("button_"+pokeImageElement+"_pokemon"+pokeIndex).classList.add("button_information_activiated");
  document.getElementById(pokeImageElement+"_pokemon_image" + pokeIndex).classList.remove("d_none");
}

function hideImagePokemon(pokeIndex,pokeImageElement){
  document.getElementById("button_"+pokeImageElement+"_pokemon" + pokeIndex).classList.remove("button_information_activiated");
  document.getElementById(pokeImageElement+"_pokemon_image" + pokeIndex).classList.add("d_none");
}
