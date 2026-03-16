function CharacterCard({ character }: any) {
    const name = character.name;
    const aliases = character.aliases[0];
    const characterNameAppearance = name && aliases ? `${name} | ${aliases}` : name || aliases;
    
    return (
        <>
            <p>{characterNameAppearance}</p>
        </>
    )
}

export default CharacterCard;