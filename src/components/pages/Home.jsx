import { FaHome } from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent h-screen">
      <div className="flex flex-col justify-center items-center text-gray-600">
        <p className="text-4xl">
          <FaHome />
        </p>
        <p>Em Breve! Página de início em desenvolvimento</p>
      </div>
    </div>
  );
}
export default Home;
