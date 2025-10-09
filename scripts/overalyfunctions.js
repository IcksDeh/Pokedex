function showPokemonOverlay(pokeIndex){
    let showPokemonDetails = document.getElementById('id_overlay_pokemon');
    removeBackgroundColor();
    showPokemonDetails.classList.remove('d_none');
    showPokemonDetails.classList.add(detailPokemonInfo[pokeIndex].types[0].type.name +'_background');
    showPokemonDetails.innerHTML = templateOverlayPokemonDetails(pokeIndex);
    checkDisableButton(pokeIndex);
}

function checkDisableButton(pokeIndex){
    if (pokeIndex == 0){
        document.getElementById("id_previous_button").disabled = true;
    }

    if (pokeIndex == detailPokemonInfo.length -1){
        document.getElementById("id_next_button").disabled = true;
    }
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

function showGeneralInformation(pokeIndex){
    document.getElementById("id_general_information"+pokeIndex).classList.remove("d_none");
    document.getElementById("id_stats_information"+pokeIndex).classList.add("d_none");
    document.getElementById("id_moves_information"+pokeIndex).classList.add("d_none");

    document.getElementById("button_general_information"+pokeIndex).classList.add("button_information_activiated");
    document.getElementById("button_stats_information"+pokeIndex).classList.remove("button_information_activiated");
    document.getElementById("button_moves_information"+pokeIndex).classList.remove("button_information_activiated");
}

function showStatsInformation(pokeIndex){
    document.getElementById("id_general_information"+pokeIndex).classList.add("d_none");
    document.getElementById("id_stats_information"+pokeIndex).classList.remove("d_none");
    document.getElementById("id_moves_information"+pokeIndex).classList.add("d_none");

    document.getElementById("button_general_information"+pokeIndex).classList.remove("button_information_activiated");
    document.getElementById("button_stats_information"+pokeIndex).classList.add("button_information_activiated");
    document.getElementById("button_moves_information"+pokeIndex).classList.remove("button_information_activiated");
}

function showMovesInformation(pokeIndex){
    document.getElementById("id_general_information"+pokeIndex).classList.add("d_none");
    document.getElementById("id_stats_information"+pokeIndex).classList.add("d_none");
    document.getElementById("id_moves_information"+pokeIndex).classList.remove("d_none");

    document.getElementById("button_general_information"+pokeIndex).classList.remove("button_information_activiated");
    document.getElementById("button_stats_information"+pokeIndex).classList.remove("button_information_activiated");
    document.getElementById("button_moves_information"+pokeIndex).classList.add("button_information_activiated");
}

function showShinyPokemon(pokeIndex){
    document.getElementById("button_normal_pokemon"+pokeIndex).classList.remove("button_information_activiated");
    document.getElementById("button_shiny_pokemon"+pokeIndex).classList.add("button_information_activiated");
    document.getElementById("normal_pokemon_image"+pokeIndex).classList.add("d_none");
    document.getElementById("shiny_pokemon_image"+pokeIndex).classList.remove("d_none");
}

function showNormalPokemon(pokeIndex){
    document.getElementById("button_normal_pokemon"+pokeIndex).classList.add("button_information_activiated");
    document.getElementById("button_shiny_pokemon"+pokeIndex).classList.remove("button_information_activiated");
    document.getElementById("normal_pokemon_image"+pokeIndex).classList.remove("d_none");
    document.getElementById("shiny_pokemon_image"+pokeIndex).classList.add("d_none");
}