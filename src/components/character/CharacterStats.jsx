function CharacterStats({ character }) {
    const translateKey = {
        strength: "Força",
        intelligence: "Inteligência",
        agility: "Agilidade",
        vitality: "Vitalidade",
    }
  return (
    <div className="flex flex-col gap-3">
      {Object.entries(character.stats).map(([key, value]) => (
        <div key={key}>
          <div className="flex justify-between text-xs mb-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            <span className="font-semibold uppercase ">
              {translateKey[key] || key}
            </span>
            <span>{value}/10</span>
          </div>

          <div className="w-full h-2 bg-gray-700 rounded-full">
            <div
              className={`h-2 ${character.textColor} rounded-full transition-all duration-500`}
              style={{
                width: `${value * 10}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterStats;