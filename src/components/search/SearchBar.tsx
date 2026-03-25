import { useState } from 'react';

function SearchBar({ onSubmit }: any) {
    const [searchTerm, setSearchTerm] = useState('');

    const onCharactersSearch = (event: any) => {
        event.preventDefault();

        const formatSearchTerm = searchTerm.split(' ').map(term => {
            const transformFirstCharacterToUpperCase = term.charAt(0).toUpperCase();
            const transformTermToUpperCase = transformFirstCharacterToUpperCase + term.slice(1);
            
            return transformTermToUpperCase; 
        });

        const searchTermToPascalCase = formatSearchTerm.join(' ');

        onSubmit(searchTermToPascalCase);
    }

    const handluInputTyping = (event: any) => {
        setSearchTerm(event.target.value);
    }

    return (
        <form onSubmit={onCharactersSearch}>
            <input type="text" value={searchTerm} onChange={handluInputTyping} style={{ marginBottom: '20px', width: '50%', height: '30px' }} />
        </form>
    )
}

export default SearchBar;