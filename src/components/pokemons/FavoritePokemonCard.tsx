import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, type Component } from "solid-js";

interface Props {
    pokemon: FavoritePokemon,
}

export const FavoritePokemonCard: Component <Props>  = ({pokemon}) => {
    //Cuando hay una desestructuración deja de ser reactivo

    const [ isVisible, setIsVisible ]= createSignal(true);    

    const imageSrc = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

    return (
        <div class="flex flex-col justify-center items-center">
            <a href={`/pokemon/${pokemon.name}`}>
                <img src={imageSrc} alt={pokemon.name}
                    width="96" height="96" />
                <p class="capitalize">
                    #{pokemon.id} {pokemon.name}
                </p>
            </a>
            <button class="text-red-400">Borrar</button>
        </div>


    )
}