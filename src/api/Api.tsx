import axios from 'axios';

const getCharacters = async () => {
    const response = await axios.get('https://www.anapioficeandfire.com/api/characters', {
        params: {
            page: 1,
            pageSize: 10
        }
    })

    return response.data;
}


export default getCharacters;