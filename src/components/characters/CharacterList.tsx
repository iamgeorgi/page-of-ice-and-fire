import { useContext } from 'react';
import CharacterCard from './CharacterCard';
import CharactersContext from '../../context/characters';

function CharacterList() {
    const context = useContext(CharactersContext);

    if (!context) {
        throw new Error('App must be used within Provider');
    }

    const { characters } = context;

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