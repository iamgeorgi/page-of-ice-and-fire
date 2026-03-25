import { useEffect } from 'react';
import './App.css'
import { getCharacters, searchCharacters } from './api/Api';
import CharacterList from './components/characters/CharacterList';
import SearchBar from './components/search/SearchBar';
import FavoritesList from './components/favorites/FavoritesList';
import useCharacters from './hooks/use-characters';

function App() {
  const { fetchCharacters } = useCharacters();

  useEffect(() => {
    fetchCharacters();
  }, [])

  // const onCharacterSearch = async (term: string) => {
  //   const res = await searchCharacters(term);
  //   setCharacters(res);
  // }

  return (
    <div className='main'>
      <h1>App of Ice and Fire</h1>
      {/* <SearchBar onSubmit={onCharacterSearch} /> */}
      <CharacterList />
      <hr />
      <FavoritesList />
    </div>
  )
}

export default App;
