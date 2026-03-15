import CharacterCard from './CharacterCard';

type CharacterListProps = {
    characters: any[];
}
function CharacterList({ characters }: CharacterListProps) {
    const charactersRender = characters.map((char: any) => <CharacterCard key={char.url} character={char} />)

    return (
        <>
            {charactersRender}
        </>
    )
}

export default CharacterList;