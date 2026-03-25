import CharacterCard from "../characters/CharacterCard";
import useCharacters from "../../hooks/use-characters";

function FavoritesList() {
    const { favoriteCharacters } = useCharacters();

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