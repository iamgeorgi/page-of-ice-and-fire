import { useContext } from "react";
import CharactersContext from "../../context/characters";
import CharacterCard from "../characters/CharacterCard";

function FavoritesList() {
    const context = useContext(CharactersContext);

    if (!context) {
        throw new Error('FavoritesList must be used within a Provider');
    }
    const { favoriteCharacters } = context;

    const favoriteCharactersRender = 
        favoriteCharacters.map((char: any) => <CharacterCard key={char.url} character={char} section="favorites" />)

    return (
        <>
            <h2>Favorites</h2>
            <div className="card-center">
                {favoriteCharactersRender}
            </div>
        </>
    )
}

export default FavoritesList;