function AchievementsCard({ icon, text }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-700/50 p-4 rounded-lg">
      <p className="text-2xl">{icon}</p>
      <p className="font-bold">{text}</p>
    </div>
  );
}
export default AchievementsCard;
