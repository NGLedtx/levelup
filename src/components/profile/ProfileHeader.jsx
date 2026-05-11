import BarXp from "./BarXp";
function ProfileHeader({ type }) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800/50 rounded-xl p-5 text-white max-w-md w-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src="/mago1.png" className="rounded-full max-w-48" />
        <h1 className="text-2xl font-bold mt-3">Natan</h1>
        <div className="flex justify-center items-center gap-3">
          <p className="text-purple-500 text-xl font-bold"> {type}</p> -
          <p className="text-gray-400 text-sm mt-1">Nível 3</p>
        </div>
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
