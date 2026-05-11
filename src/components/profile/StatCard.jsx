function StatCard({ icon, text, value }) {
  return (
    <div className="flex flex-col items-center bg-gray-800/50 p-4 text-white rounded-lg w-40">
      <div className="flex gap-3 items-center mb-2 text-xl">
        <span>{icon}</span>
        <h2 className="text-gray-500">{text}</h2>
      </div>
          <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
export default StatCard;
