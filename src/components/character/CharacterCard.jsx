import CharacterStats from "./CharacterStats";

function CharacterCard({ currentCharacter, handleNext, handlePrevious }) {
  return (
    <div>
      <div className="relative w-full max-w-sm h-[500px] overflow-hidden">
        <img src={currentCharacter.image} className="w-full rounded-3xl h-full object-cover object-[center_30%]" />
      </div>
      <div className="absolute left-1/2 top-[48%] -translate-x-1/2 w-[85%] bg-slate-900/20 backdrop-blur-md rounded-2xl p-4">
        <CharacterStats character={currentCharacter}/>
      </div>
    </div>
  );
}
export default CharacterCard;
