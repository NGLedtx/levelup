import { FaBolt } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import ArchievementsCard from "./ArchievementsCard";

function Achievements() {
  return (
    <div className="flex flex-col rounded-xl p-5 text-white max-w-md w-full min-h-screen">
      <h1 className="text-2xl font-bold mt-3">Conquistas</h1>
      <div className="grid grid-cols-3  gap-4 mt-4 bg-gray-800/50 p-4 rounded-lg">
        <ArchievementsCard
          icon={<FaBolt className="text-yellow-500" />}
          text="200 Xp"
        />
        <ArchievementsCard
          icon={<HiOutlineArrowTrendingUp className="text-green-500" />}
          text="3 dias"
        />
        <ArchievementsCard
          icon={<FaUser className="text-blue-500" />}
          text="Nível 3"
        />
        <ArchievementsCard
          icon={<FaBolt className="text-gray-500" />}
          text="500 XP"
        />
        <ArchievementsCard
          icon={<HiOutlineArrowTrendingUp className="text-gray-500" />}
          text="7 dias"
        />
        <ArchievementsCard
          icon={<FaUser className="text-gray-500" />}
          text="Nível 10"
        />
      </div>
    </div>
  );
}
export default Achievements;
