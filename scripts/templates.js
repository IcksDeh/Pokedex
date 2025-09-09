function templatePokemonCard(pokeIndex){
    return `<div class="pokemon_card_background_color">
                    <div class="sort_id_name_pokemon">
                        <p>${pokeIndex+1}</p>
                        <p>${detailPokemonInfo[pokeIndex].name}</p>
                    </div>    
                    <div class="sort_img_pokemon">
                        <img class="img_pokemon" src="${detailPokemonInfo[pokeIndex].sprites.front_default}" alt="img Pokemon">
                    </div>
                </div>`
}