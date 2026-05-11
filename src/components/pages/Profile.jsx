import { FaBolt, FaUser } from "react-icons/fa";
import ProfileHeader from "../profile/ProfileHeader";
import BarXp from "../profile/BarXp";
import StatCard from "../profile/StatCard";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import Achievements from "../profile/Achievements";

function Profile() {
  return (
    <div className="flex flex-col items-center min-h-screen mb-10">
      <ProfileHeader type="Mago" />
      <div className="flex gap-5 mt-5 justify-center items-center">
        <StatCard icon={<FaBolt className="text-yellow-500"/>} text="Xp Total" value="1000" />
        <StatCard
          icon={<HiOutlineArrowTrendingUp className="text-green-500"/>}
          text="Sequência"
          value="5 dias"
        />
      </div>
      <Achievements/>
    </div>
  );
}
export default Profile;
