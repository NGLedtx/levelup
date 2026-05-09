function StatCard({ icon, text, value }) {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent">
      <div className="flex bg-gray-800/50 p-4 text-white rounded-lg">
        <span>{icon}</span>
        <h2>{text}</h2>
        <div className="flex ">
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
}
export default StatCard;
