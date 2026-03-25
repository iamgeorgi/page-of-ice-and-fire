import { useContext } from 'react';
import CharactersContext from '../context/characters';

function useCharacters() {
    const context = useContext(CharactersContext);

    if (!context) {
        throw new Error('useCharacters must be used within Provider');
    }

    return context;
}

export default useCharacters;