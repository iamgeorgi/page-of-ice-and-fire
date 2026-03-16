import { useState, useEffect } from 'react';
import './App.css'
import { getCharacters, searchCharacters } from './api/Api';
import CharacterList from './components/characters/CharacterList';
import SearchBar from './components/SearchBar';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const res = await getCharacters('1', '20');
      setCharacters(res);
    }

    loadCharacters();
  }, [])

  const onCharacterSearch = async (term: string) => {
    const res = await searchCharacters(term);
    setCharacters(res);
  }

  return (
    <div className='main'>
      <SearchBar onSubmit={onCharacterSearch} />
      <CharacterList characters={characters} />
    </div>
  )
}

export default App;
