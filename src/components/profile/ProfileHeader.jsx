import BarXp from "./BarXp";
function ProfileHeader() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800/50 rounded-xl p-5 text-white max-w-md w-full gap-3">
      <div className="flex flex-col justify-center items-center">
        <img src="/mago1.png" className="rounded-full" />
        <h1 className="text-2xl font-bold mt-3">Natan</h1>
        <p className="text-gray-400 text-sm mt-1">Nível 3</p>
        <div className="flex w-full justify-between">
          <p>XP</p>
          <p className="text-purple-400 text-sm">50 /150 XP</p>
        </div>
        <BarXp />
      </div>
    </div>
  );
}
export default ProfileHeader;
