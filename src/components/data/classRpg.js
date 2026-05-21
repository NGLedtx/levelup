import warriorImg from "../../assets/characters/warrior/warriors.jpg";
import mageImg from "../../assets/characters/mage/wizards.png";
import archerImg from "../../assets/characters/archer/archers.png";
import healerImg from "../../assets/characters/healer/healers.png";

export const classRpg = [
  {
    id: 1,
    name: "Guerreiro",
    image: warriorImg,
    color: "bg-gradient-to-br from-black via-red-950 to-orange-950",
    textColor: "bg-gradient-to-r from-red-400 via-rose-400 to-red-600",
    advantage:
      "+10% de XP em hábitos físicos (academia, treino, cardio e esportes)",
    stats: {
      strength: 10,
      intelligence: 4,
      agility: 5,
      vitality: 9,
    },
  },
  {
    id: 2,
    name: "Mago",
    image: mageImg,
    color: "bg-gradient-to-br from-black via-purple-900 to-indigo-900",
    textColor: "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-500",
    advantage: "+10% de XP em hábitos de estudo, leitura e aprendizado",
    stats: {
      strength: 4,
      intelligence: 10,
      agility: 5,
      vitality: 4,
    },
  },
  {
    id: 3,
    name: "Arqueiro",
    image: archerImg,
    color: "bg-gradient-to-br from-black via-blue-900 to-cyan-900",
    textColor: "bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500",
    advantage: "+10% de XP em hábitos de foco, disciplina e agilidade mental",
    stats: {
      strength: 6,
      intelligence: 7,
      agility: 10,
      vitality: 5,
    },
  },
  {
    id: 4,
    name: "Curandeiro",
    image: healerImg,
    color: "bg-gradient-to-br from-black via-emerald-900 to-teal-900",
    textColor: "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500",
    advantage: "+10% de XP em hábitos de saúde, autocuidado e bem-estar",
    stats: {
      strength: 4,
      intelligence: 8,
      agility: 3,
      vitality: 10,
    },
  },
];
