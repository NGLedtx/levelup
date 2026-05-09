import { FaLightbulb, FaUser } from "react-icons/fa";
import ProfileHeader from "../profile/ProfileHeader";
import BarXp from "../profile/BarXp";
import StatCard from "../profile/StatCard";

function Profile() {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent h-screen">
      <ProfileHeader />
      <StatCard icon={FaLightbulb} text="Xp total" value="1000" />
    </div>
  );
}
export default Profile;
