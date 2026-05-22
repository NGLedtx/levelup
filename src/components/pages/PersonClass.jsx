import { useState } from "react";
import { classRpg } from "../data/classRpg";
import CharacterCard from "../character/CharacterCard";
import CarouselControl from "../character/CarouselControl";
import CharacterStats from "../character/CharacterStats";
import CharacterAdvantage from "../character/CharacterAdvantage";
import Modal from "../layout/Modal";
import CharacterChoice from "../character/CharacterChoice";

function PersonClass() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [currentClass, setCurrentClass] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const currentCharacter = classRpg[currentClass];

  function togglePersonModal(){
    setModalOpen(!modalOpen);
  }
  function handleNext() {
    setCurrentClass((prev) => (prev === classRpg.length - 1 ? 0 : prev + 1));
  }
  function handlePrevious() {
    setCurrentClass((prev) => (prev === 0 ? classRpg.length - 1 : prev - 1));
  }
  return (
    <div
      className={`
    ${classRpg[currentClass].color}
    flex flex-col items-center
    relative overflow-hidden text-white
    h-screen justify-center
    transition-all duration-500
  `}
    >
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent font-semibold">
            Bem vindo, {user.name}
          </h1>
          <p>Escolha sua classe</p>
        </div>
        <CharacterCard currentCharacter={currentCharacter} />
        <CarouselControl
          currentCharacter={currentCharacter}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
        <CharacterAdvantage currentCharacter={currentCharacter} />
        <button className="font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-gray-900 p-4 rounded-lg w-80" onClick={()=> setModalOpen(true)}>
          Escolher {currentCharacter.name}
        </button>
        {modalOpen && (
          <div>
            <Modal
            onClose={togglePersonModal}
            currentCharacter={currentCharacter}
            children={<CharacterChoice currentCharacter={currentCharacter}/>}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default PersonClass;
