import { useState, useEffect } from 'react'
import './App.css'
import getCharacters from './api/Api';
import CharacterList from './components/characters/CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const res = await getCharacters();
      setCharacters(res);
    }

    loadCharacters();
  }, [])

  return (
    <>
      <CharacterList characters={characters} />
    </>
  )
}

export default App;
