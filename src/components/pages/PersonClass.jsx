import { useState } from "react";
import { classRpg } from "../data/classRpg";
import CharacterCard from "../character/CharacterCard";
import CarouselControl from "../character/CarouselControl";
import CharacterStats from "../character/CharacterStats";

function PersonClass() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [currentClass, setCurrentClass] = useState(0);
  const currentCharacter = classRpg[currentClass];
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
    flex flex-col items-center px-4
    relative overflow-hidden text-white
    h-screen justify-center gap-10
    transition-all duration-500
  `}
    >
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center">
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
      </div>
    </div>
  );
}
export default PersonClass;
