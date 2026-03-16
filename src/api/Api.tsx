import axios from 'axios';

export const getCharacters = async (page: string, pageSize: string) => {
    const response = await axios.get('https://www.anapioficeandfire.com/api/characters', {
        params: {
            page: page,
            pageSize: pageSize
        }
    })

    return response.data;
}

export const searchCharacters = async (term: string) => {
    const response = await axios.get('https://www.anapioficeandfire.com/api/characters', {
        params: {
            name: term,
        }
    })

    return response.data;
}