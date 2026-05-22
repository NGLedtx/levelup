import { useState } from "react";

function CharacterChoice({ currentCharacter }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  return (
    <div className={`flex flex-col justify-center items-center gap-10 `}>
      <h1 className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent text-2xl font-semibold">
        Escolha seu personagem
      </h1>
      <div className="flex justify-between items-center gap-20 font-semibold text-xl">
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => setSelectedCharacter("male")}
            className={`cursor-pointer rounded-lg transition-all duration-300 ${
              selectedCharacter === "male"
                ? "scale-105 ring-4 ring-amber-400 shadow-lg shadow-amber-500/50"
                : "opacity-75"
            }`}
          >
            <img
              className="rounded-full w-40"
              src={currentCharacter.imageMen}
            />
            <p className=" bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Masculino</p>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => setSelectedCharacter("female")}
            className={`cursor-pointer rounded-lg transition-all duration-300 ${
              selectedCharacter === "female"
                ? "scale-105 ring-4 ring-yellow-400 shadow-lg shadow-yellow-500/50"
                : "opacity-75"
            }`}
          >
            <img
              className="rounded-full w-40"
              src={currentCharacter.imageWoman}
            />
            <p className=" bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Feminino</p>
          </button>
        </div>
      </div>
      <div>
        <button
          className={`font-bold text-gray-900 p-4 rounded-lg w-80
            ${selectedCharacter
                ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 transition-all duration-300"
                : "bg-gradient-to-r from-gray-600 via-slate-500 to-gray-700 cursor-not-allowed opacity-80"
            }`}
          onClick={() => setModalOpen(true)}
          disabled={!selectedCharacter}
        >
          Escolher!
        </button>
      </div>
    </div>
  );
}
export default CharacterChoice;
