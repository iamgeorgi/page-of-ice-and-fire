import CharacterCard from './CharacterCard';
import useCharacters from '../../hooks/use-characters';

function CharacterList() {
    const { characters } = useCharacters();

    const charactersRender = characters.map((char: any) => <CharacterCard key={char.url} character={char} section="characters" />)

    return (
        <>
            <div className="card-center">
                {charactersRender}
            </div>
        </>
    )
}

export default CharacterList;