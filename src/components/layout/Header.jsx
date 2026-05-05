import { FaUserCircle } from "react-icons/fa";
function Header() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col text-white p-5  max-w-md bg-gray-800 rounded-xl shadow p-4-b">
        <div className="flex justify-between items-center gap-7 ">
          <div className="text-6xl">
            <FaUserCircle />
          </div>
          <div className="text-3xl">
            <p>Evolução Pessoal!</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-500">
          <div>
            <p>Level 2 • 100 XP</p>
          </div>
          <div>
            <p>Segunda, 4 de Maio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
