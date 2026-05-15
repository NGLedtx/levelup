import { FaLock, FaUserPlus } from "react-icons/fa";

function Login() {
  return (
    <div className="flex flex-col justify-evenly items-center bg-transparent h-screen text-white">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-7xl">LevelUp</h1>
        <p className="text-lg text-gray-400">Evolua um nível por dia!</p>
      </div>
      <div className=" flex justify-center flex-col items-center bg-gray-800/50 rounded-lg p-6">
        <h2 className="text-2xl">Login</h2>
        <form className="flex flex-col p-4 gap-3">
          <label htmlFor="username">Nome de usuário:</label>
          <div className="relative">
            <FaUserPlus className="absolute left-2 top-3 text-gray-600 text-lg"/>
            <input
              type="text"
              id="username"
              placeholder="Digite seu nome de usuário..."
              className="text-gray-800 pl-8 outline-none focus:ring-2 focus:ring-gray-500 rounded h-10"
            />
          </div>
          <label htmlFor="password">Senha:</label>
          <div className="relative">
            <FaLock className="absolute left-2 top-3 text-gray-600" />
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha..."
              className="text-gray-800 pl-8 outline-none focus:ring-2 focus:ring-gray-500 rounded h-10"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
