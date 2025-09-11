function templatePokemonCard(pokeIndex){
    return `<div id="id_pokemon_card${pokeIndex}" class="class_pokemon_card">
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
    return `<div class = "label_each_pokemon ${detailPokemonInfo[pokeIndex].types[typeIndex].type.name}">${detailPokemonInfo[pokeIndex].types[typeIndex].type.name}</div>`
}