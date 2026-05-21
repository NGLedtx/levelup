function CharacterAdvantage({currentCharacter}){
    return(
        <div className={`${currentCharacter.textColor} flex justify-center items-center text-center p-2 rounded bg-transparent w-72 border-2 border-amber-400`}>
            <p className="text-base font-semibold">{currentCharacter.advantage}</p>
        </div>
    )
}
export default CharacterAdvantage;