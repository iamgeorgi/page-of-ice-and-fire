import { useState, useEffect, useContext } from 'react';
import './App.css'
import { getCharacters, searchCharacters } from './api/Api';
import CharacterList from './components/characters/CharacterList';
import SearchBar from './components/search/SearchBar';
import FavoritesList from './components/favorites/FavoritesList';
import CharactersContext from './context/characters';

function App() {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error('App must be used within Provider');
  }

  const { fetchCharacters } = context;

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
