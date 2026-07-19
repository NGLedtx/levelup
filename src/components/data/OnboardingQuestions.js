import { TbTargetArrow } from "react-icons/tb";
import { GiFallingRocks, GiDaemonSkull } from "react-icons/gi";
const Questions = [
  {
    id: 1,
    question: "Qual seu principal objetivo?",
    icon: TbTargetArrow,
    options: ["Saúde", "Estudos", "Ganhar dinheiro", "Carreira"],
  },
  {
    id: 2,
    question: "Qual sua maior dificuldade?",
    icon: GiFallingRocks,
    options: ["Falta de foco", "Disciplina", "Ansiedade", "Falta de tempo"],
  },
  {
    id: 3,
    question: "BOSS: Você possui algum vício?",
    icon: GiDaemonSkull,
    options: [
      "Pornografia",
      "Bebida alcoólica",
      "Drogas",
      "Redes sociais",
      "Nenhum",
    ],
  },
];
export default Questions;
