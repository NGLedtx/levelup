import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import warriorImg from "../../assets/characters/warrior/warriors.jpg";
import mageImg from "../../assets/characters/mage/wizards.png";
import archerImg from "../../assets/characters/archer/archers.png";
import healerImg from "../../assets/characters/healer/healers.png";

function PersonClass() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [currentClass, setCurrentClass] = useState(0);
  const classRpg = [
    {
      id: 1,
      name: "Guerreiro",
      image: warriorImg,
      color: "bg-gradient-to-br from-black via-red-950 to-orange-950",
      textColor: "bg-gradient-to-r from-red-400 via-rose-400 to-red-600",
      strength: 10,
      intelligence: 4,
      agility: 5,
      vitality: 7
    },
    {
      id: 2,
      name: "Mago",
      image: mageImg,
      color: "bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900",
      textColor:
        "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-500",
      strength: 10,
      intelligence: 4,
      agility: 0,
      vitality: 0,
    },
    {
      id: 3,
      name: "Arqueiro",
      image: archerImg,
      color: "bg-gradient-to-br from-blue-900 via-gray-900 to-cyan-900",
      textColor: "bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500",
      strength: 10,
      intelligence: 4,
      agility: 0,
      vitality: 0
    },
    {
      id: 4,
      name: "Curandeiro",
      image: healerImg,
      color: "bg-gradient-to-br from-emerald-900 via-gray-900 to-teal-900",
      textColor: "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500",
      strength: 10,
      intelligence: 4,
      agility: 0,
      vitality: 0
    },
  ];
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
    h-screen justify-center gap-20
    transition-all duration-500
  `}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent font-semibold">
          Bem vindo, {user.name}
        </h1>
        <p>Escolha sua classe</p>
      </div>
      <div>
        <img
          src={classRpg[currentClass].image}
          className="max-w-full rounded-3xl"
        />
      </div>
      <div className="flex justify-center items-center gap-10 text-4xl">
        <button onClick={handlePrevious}>
          <TiArrowLeftThick />
        </button>
        <h2
          className={`
    text-3xl
    ${classRpg[currentClass].textColor}
    bg-clip-text
    text-transparent
    font-semibold
  `}
        >
          {classRpg[currentClass].name}
        </h2>
        <button onClick={handleNext}>
          <TiArrowRightThick />
        </button>
      </div>
    </div>
  );
}
export default PersonClass;
