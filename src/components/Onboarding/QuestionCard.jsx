function QuestionCard({ icon: Icon, question, options }) {
  const user = JSON.parse(localStorage.getItem("user") || {});
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <div className="flex gap-2">
        <Icon className="w-12 h-12 text-amber-500" />
        <h1 className="flex text-2xl font-bold mb-4 text-yellow-400 justify-center items-center">{question}</h1>
      </div>
      {options.map((option) => (
        <button key={option} className="font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-gray-900 p-4 rounded-lg w-80">
          {option}
        </button>
      ))}
    </div>
  );
}
export default QuestionCard;
