function templatePokemonCard(pokeIndex) {
  return `<div id="id_pokemon_card${pokeIndex}" class="class_pokemon_card ${detailPokemonInfo[pokeIndex].types[0].type.name}_border ${detailPokemonInfo[pokeIndex].types[0].type.name}_background_light" onclick="checkPokemonOverlay(${pokeIndex}, detailPokemonInfo)">
                    <div class="sort_id_name_pokemon">
                        <p>${detailPokemonInfo[pokeIndex].id}</p>
                        <p>${detailPokemonInfo[pokeIndex].name}</p>
                    </div>    
                    <div class="sort_img_pokemon">
                        <img class="img_pokemon" src="${
                          detailPokemonInfo[pokeIndex].sprites.front_default
                        }" alt="img Pokemon">
                    </div>
                    <div id="id_sort_lable_type_pokemon${pokeIndex}" class="class_sort_lable_type_pokemon">
                    </div>
                </div>`;
}

function templateLabelEachPokemon(typeIndex, pokeIndex) {
  return `<div class = "label_each_pokemon ${detailPokemonInfo[pokeIndex].types[typeIndex].type.name}_background">${detailPokemonInfo[pokeIndex].types[typeIndex].type.name}</div>`;
}

function templateOverlayPokemonDetails(pokeIndex, array, arrayName) {
  return `<div class="sort_header_overlay">
                <div class="sort_id_name_overlay">
                     <p>${array[pokeIndex].id}</p>
                    <p>${array[pokeIndex].name}</p>
                </div>
                <div class="sort_x_button">
                     <button onclick="closeOverlay()" class="x_button">X</button>
                 </div>      
            </div>
            <div class="pokemon_information_switch_buttons">
                <button onclick="CheckShowImagePokemon(${pokeIndex}, 'normal')" class="button_pokemon_information button_information_activiated" id="button_normal_pokemon${pokeIndex}">normal</button>
                <button onclick="CheckShowImagePokemon(${pokeIndex}, 'shiny')"class="button_pokemon_information" id="button_shiny_pokemon${pokeIndex}">shiny</button>
            </div>
            <div class="image_overlay">
                <img id="normal_pokemon_image${pokeIndex}" class="img_pokemon_overlay" src="${array[pokeIndex].sprites.front_default}" alt="pokemon">
                <img id="shiny_pokemon_image${pokeIndex}" class="img_pokemon_overlay d_none" src="${array[pokeIndex].sprites.front_shiny}" alt="pokemon">
            </div>
            <div class="pokemon_information_switch_buttons">
                    <button onclick="showInformation(${pokeIndex}, 'general', '${arrayName}')" class="button_pokemon_information button_information_activiated" id="button_general_information${pokeIndex}">general</button>
                    <button onclick="showInformation(${pokeIndex}, 'stats', '${arrayName}')" class="button_pokemon_information" id="button_stats_information${pokeIndex}">stats</button>
                    <button onclick="showInformation(${pokeIndex}, 'moves', '${arrayName}')" class="button_pokemon_information" id="button_moves_information${pokeIndex}">moves</button>
            </div>
            <div class="container_detail_information" id= "id_general_information${pokeIndex}">
                        <table>
                            <tr>
                                <td>Height:</td>
                                <td>${array[pokeIndex].height}</td>
                                
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <td>${array[pokeIndex].weight}</td>
                            </tr>
                        </table>
            </div>
            <div class=" container_detail_information d_none" id= "id_stats_information${pokeIndex}">
                        <table>
                            <tr>
                                <td>HP:</td>
                                <td>${array[pokeIndex].stats[0].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Attack:</td>
                                <td>${array[pokeIndex].stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Defense:</td>
                                <td>${array[pokeIndex].stats[2].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Special Attack:</td>
                                <td>${array[pokeIndex].stats[3].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Special Defense:</td>
                                <td>${array[pokeIndex].stats[4].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Speed:</td>
                                <td>${array[pokeIndex].stats[5].base_stat}</td>
                            </tr>
                        </table>
            </div>
            <div class="container_detail_information d_none" id= "id_moves_information${pokeIndex}">
                        <ul id="show_pokemon_moves${pokeIndex}">
                        </ul>
            </div>
            <div class="sort_next_previus_button">
                <button onclick="changePokemon(${pokeIndex}, -1, '${arrayName}')" class="style_next_previous_button" id="id_previous_button"><img class="img_button_pokeball" src="./assets/img/pokeball_next_button_2.png" alt="">Catch Previous</button>
                <button onclick="changePokemon(${pokeIndex}, +1, '${arrayName}')" class="style_next_previous_button" id="id_next_button"><img class="img_button_pokeball" src="./assets/img/pokeball_next_button_2.png" alt="">Catch Next</button>
            </div>  `;
}

function templateCatchNextButton() {
  return ` <button id="id_button_catch_next_pokemon" onclick = loadMorePokemon() class="button_catch_next_pokemon"><img class="img_pokeball_catch_next_pokemon" src="./assets/img/pokeball_next_button_2.png" alt="">Catch Next Pokemon!<img class="img_pokeball_catch_next_pokemon" src="./assets/img/pokeball_next_button_2.png" alt=""></button>`;
}

function showPokemonMoveTemplate(pokeIndex, moveIndex, array) {
  return `<li>${array[pokeIndex].moves[moveIndex].move.name}</li>`;
}
