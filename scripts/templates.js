function templatePokemonCard(pokeIndex){
    return `<div id="id_pokemon_card${pokeIndex}" class="class_pokemon_card ${detailPokemonInfo[pokeIndex].types[0].type.name}_border ${detailPokemonInfo[pokeIndex].types[0].type.name}_background_light" onclick="showPokemonOverlay(${pokeIndex})">
                    <div class="sort_id_name_pokemon">
                        <p>${pokeIndex+1}</p>
                        <p>${detailPokemonInfo[pokeIndex].name}</p>
                    </div>    
                    <div class="sort_img_pokemon">
                        <img class="img_pokemon" src="${detailPokemonInfo[pokeIndex].sprites.front_default}" alt="img Pokemon">
                    </div>
                    <div id="id_sort_lable_type_pokemon${pokeIndex}" class="class_sort_lable_type_pokemon">
                    </div>
                </div>`
}

function templateLabelEachPokemon(typeIndex, pokeIndex){
    return `<div class = "label_each_pokemon ${detailPokemonInfo[pokeIndex].types[typeIndex].type.name}_background">${detailPokemonInfo[pokeIndex].types[typeIndex].type.name}</div>`
}

function templateOverlayPokemonDetails(pokeIndex){
    return `<div class="sort_header_overlay">
                <div class="sort_id_name_overlay">
                     <p>${pokeIndex+1}</p>
                    <p>${detailPokemonInfo[pokeIndex].name}</p>
                </div>
                <div class="sort_x_button">
                     <button onclick="closeOverlay()" class="x_button">X</button>
                 </div>      
            </div>
            <div class="image_overlay">
                <img class="img_pokemon_overlay" src="${detailPokemonInfo[pokeIndex].sprites.front_default}" alt="pokemon">
            </div>
            <div class="sort_next_previus_button">
                <button onclick="showPreviousPokemon(${pokeIndex})" class="style_next_previous_button"><img class="img_button_pokeball" src="./assets/img/pokeball_next_button_2.png" alt="">Catch Previous</button>
                <button onclick="showNextPokemon(${pokeIndex})" class="style_next_previous_button"><img class="img_button_pokeball" src="./assets/img/pokeball_next_button_2.png" alt="">Catch Next</button>
            </div>  `
}

function templateCatchNextButton() {
    return ` <button onclick = loadMorePokemon() class="button_catch_next_pokemon"><img class="img_pokeball_catch_next_pokemon" src="./assets/img/pokeball_next_button_2.png" alt="">Catch Next Pokemon!<img class="img_pokeball_catch_next_pokemon" src="./assets/img/pokeball_next_button_2.png" alt=""></button>`
    
}