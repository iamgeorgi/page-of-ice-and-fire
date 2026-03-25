import { createContext, useState, ReactNode } from 'react';
import { getCharacters } from '../api/Api';

type CharactersContextType = {
    favoriteCharacters: any[];
    addToFavorites: any;
    removeFromFavorites: any;
    fetchCharacters: any;
    characters: any;
};

const CharactersContext = createContext<CharactersContextType | undefined>(undefined);

function Provider({ children }: { children: ReactNode }) {
    const [characters, setCharacters] = useState<any[]>([]);
    const [favoriteCharacters, setFavoriteCharacters] = useState<any[]>([]);

    const fetchCharacters = () => {
        const loadCharacters = async () => {
            const res = await getCharacters('1', '10');
            setCharacters(res);
        }

        loadCharacters();
    }

    const addToFavorites = (character: any) => {
        const isAlreadyAdded = favoriteCharacters.find(char => char.url === character.url);

        if (isAlreadyAdded) {
            return;
        }

        const updatedCharacters = [
            ...favoriteCharacters,
            character
        ]

        setFavoriteCharacters(updatedCharacters);
    };

    const removeFromFavorites = (id: any) => {
        const filteredCharacters = favoriteCharacters.filter(char => char.url !== id);

        setFavoriteCharacters(filteredCharacters);
    }

    const valueToShare = {
        favoriteCharacters,
        addToFavorites,
        removeFromFavorites,
        fetchCharacters,
        characters,
    };

    return (
        <CharactersContext.Provider value={valueToShare}>
            {children}
        </CharactersContext.Provider>
    );
}

export { Provider };
export default CharactersContext;