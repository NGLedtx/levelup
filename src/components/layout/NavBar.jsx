import { FaHome, FaMedal, FaUser } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-center mt-5 text-white bg-transparent rounded-xl shadow fixed bottom-0 left-0 w-full">
      <ul className="flex items-center gap-10 text-2xl p-4 px-20 rounded-3xl shadow-xl">
        <li>
          <Link className="flex flex-col items-center gap-1" to="/">
            <FaHome className="text-2xl hover:text-green-400 transition" />
            <span className="text-sm text-gray-400">Inicio</span>
          </Link>
        </li>
        <li>
          <Link className="flex flex-col items-center gap-1" to="/progress">
            <GiProgression className="text-2xl hover:text-yellow-400 transition"/>
            <span className="text-sm text-gray-400">Progresso</span>
          </Link>
        </li>
        <li>
          <Link className="flex flex-col items-center gap-1" to="/targets">
            <TbTargetArrow className="text-2xl hover:text-red-400 transition" />
            <span className="text-sm text-gray-400">Metas</span>
          </Link>
        </li>
        <li>
          <Link className="flex flex-col items-center gap-1" to="/profile">
            <FaUser className="text-2xl hover:text-blue-400 transition" />
            <span className="text-sm text-gray-400">Perfil</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
