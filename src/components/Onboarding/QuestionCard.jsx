function QuestionCard() {
  const user = JSON.parse(localStorage.getItem("user") || {});
  return (
    <div className={`${user.color} h-screen flex flex-col items-center`}>
      {user.gender === "male" ? (
        <h1 className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent text-2xl font-semibold">
          Bem vindo, {user.name}
        </h1>
      ) : (
        <h1 className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent text-2xl font-semibold">
          Bem vinda, {user.name}
        </h1>
      )}
      {user.gender === "male" ? (
        <p className="text-sm text-white">
          Você como {user.class} deve escolher o melhor caminho para evoluir!
        </p>
      ) : (
        <p className="text-sm text-white">
          Você como {user.class} deve escolher o melhor caminho para evoluir!
        </p>
      )}
    </div>
  );
}
export default QuestionCard;
