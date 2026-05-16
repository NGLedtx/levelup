import { useState } from "react";
import { FaLock, FaUserPlus } from "react-icons/fa";

import { IoEnterOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex flex-col justify-evenly items-center bg-transparent h-screen text-white">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-7xl">LevelUp</h1>
        <p className="text-lg text-gray-400">Evolua um nível por dia!</p>
      </div>

      <div className=" flex justify-center flex-col items-center bg-gray-800/50 rounded-lg p-6">
        <h2 className="text-2xl">{isLogin ? "Login" : "Cadastre-se"}</h2>

        <form className="flex flex-col p-4 gap-3">
          <div>
            <label htmlFor="username">Nome de usuário</label>
            <div className="relative">
              <FaUserPlus className="absolute left-2 top-3 text-gray-600 text-lg" />
              <input
                type="text"
                id="username"
                placeholder="Digite seu nome"
                className="text-gray-800 pl-8 outline-none focus:ring-2 focus:ring-gray-500 rounded h-10"
              />
            </div>
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="password">Email</label>
              <div className="relative">
                <MdEmail className="absolute left-2 top-3 text-gray-600" />
                <input
                  type="email"
                  id="email"
                  placeholder="Digite sua senha"
                  className="text-gray-800 pl-8 outline-none focus:ring-2 focus:ring-gray-500 rounded h-10"
                />
              </div>
            </div>
          )}
          <div>
            <label htmlFor="password">Senha</label>
            <div className="relative">
              <FaLock className="absolute left-2 top-3 text-gray-600" />
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                className="text-gray-800 pl-8 outline-none focus:ring-2 focus:ring-gray-500 rounded h-10"
              />
            </div>
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="password">Confirme sua senha</label>
              <div className="relative">
                <FaLock className="absolute left-2 top-3 text-gray-600" />
                <input
                  type="password"
                  id="password"
                  placeholder="Confirme sua senha"
                  className="text-gray-800 pl-8 outline-none focus:ring-2 focus:ring-gray-500 rounded h-10"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-slate-500 mt-3 text-center flex items-center justify-center gap-2 hover:bg-slate-600 transition-colors"
          >
            {isLogin ? (
              <>
                <IoEnterOutline />
                <span>Login</span>
              </>
            ) : (
              <>
                <FaUserPlus />
                <span>Cadastrar-se</span>
              </>
            )}
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-4">
          {!isLogin ? "Já tem uma conta?" : "Não tem uma conta?"}{" "}
          <a
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {!isLogin ? "Entre aqui" : "Cadastre-se"}
          </a>
        </p>
      </div>
    </div>
  );
}
export default Login;
