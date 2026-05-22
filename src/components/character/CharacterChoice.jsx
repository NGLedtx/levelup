function CharacterChoice({ currentCharacter }) {
  return (
    <div className={`flex flex-col justify-center items-center gap-10 `}>
      <h1 className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent text-2xl font-semibold">
        Escolha seu personagem
      </h1>
      <div className="flex justify-between items-center gap-20 font-semibold text-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
        <div className="flex flex-col justify-center items-center">
          <button>
            <img
              className="rounded-full w-40"
              src={currentCharacter.imageMen}
            />
            <p>Masculino</p>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button>
            <img
              className="rounded-full w-40"
              src={currentCharacter.imageWoman}
            />
            <p>Feminino</p>
          </button>
        </div>
      </div>
      <div>
        <button
          className="font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-gray-900 p-4 rounded-lg w-80"
          onClick={() => setModalOpen(true)}
        >
          Escolher!
        </button>
      </div>
    </div>
  );
}
export default CharacterChoice;
