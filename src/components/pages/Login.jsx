import Input  from "../form/Input.jsx";
import Button from "../form/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaLock, FaUserPlus } from "react-icons/fa";

import { IoEnterOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LuSwords } from "react-icons/lu";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:""
  })
  function handleChange(e){
    const { name, value} = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  function handleSubmit(e){
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 flex flex-col items-center justify-center px-4 relative overflow-hidden text-white">
      <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full p-5">
        <LuSwords className="text-7xl font-semibold text-slate-900"/>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mb-20">
        <h1 className="text-7xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent font-semibold">LevelUp</h1>
        <p className="text-lg bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Transforme sua vida em uma aventura épica</p>
      </div>

      <div className=" flex justify-center flex-col items-center bg-gray-800/50 rounded-lg p-8">
        <h2 className="text-2xl">{isLogin ? "Bem vindo de volta" : "Criar uma conta"}</h2>
        <p className="text-sm text-gray-400">{isLogin ? "O retorno do Herói ":"É hora de transformar a sua vida"}</p>

        <form className="flex flex-col p-4 gap-3" onSubmit={handleSubmit}>
          <div>
              <Input
              type="text"
              text="Nome"
              name="name"
              placeholder="Digite seu nome"
              icon={<FaUserPlus/>}
              value={formData.name}
              onChange={handleChange}
              />
            </div>
          {!isLogin && (
            <div>
              <Input
              type="email"
              text="Email"
              name="email"
              placeholder="Digite seu email"
              icon={<MdEmail/>}
              value={formData.email}
              onChange={handleChange}
              />
            </div>
          )}
          <div>
            <Input
              type="password"
              text="Senha"
              name="password"
              placeholder="Crie uma senha"
              icon={<FaLock/>}
              value={formData.password}
              onChange={handleChange}
              />
          </div>
          {!isLogin && (
            <div>
              <Input
              type="password"
              text="Confirme a senha"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              icon={<FaLock/>}
              value={formData.confirmPassword}
              onChange={handleChange}
              />
            </div>
          )}
          {!isLogin ? (
            <Button
          icon={<LuSwords/>}
          text="Iniciar minha jornada!"/>
          ):(
            <Button
          icon={<IoEnterOutline/>}
          text="Entrar"/>
          )}
          
        </form>
        <p className="text-gray-400 text-sm mt-4">
          {!isLogin ? "Já tem uma conta?" : "Não tem uma conta?"}{" "}
          <a
            className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent cursor-pointer"
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
