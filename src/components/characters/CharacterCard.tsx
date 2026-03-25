import { useContext } from "react";
import CharactersContext from "../../context/characters";

function CharacterCard({ character, section }: any) {
    const context = useContext(CharactersContext);

    if (!context) {
        throw new Error('FavoritesList must be used within a Provider');
    }
    const { addToFavorites, removeFromFavorites } = context;

    const name = character.name;
    const aliases = character.aliases[0];
    const characterNameAppearance = name && aliases ? `${name} | ${aliases}` : name || aliases;

    const onAddToFavorite = () => {
        addToFavorites(character);
    };

    const onRemoveFromFavorite = () => {
        removeFromFavorites(character.url);
    }

    const buttontext = section === 'characters' ? 'Add' : 'Remove';
    const buttonAction = section === 'characters' ? onAddToFavorite : onRemoveFromFavorite;

    return (
        <>
            <div className="card">
                <p>{characterNameAppearance}</p>
                <button onClick={buttonAction}>{buttontext}</button>
            </div>
        </>
    )
}

export default CharacterCard;