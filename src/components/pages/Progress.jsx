import { GiProgression } from "react-icons/gi";

function Progress() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen">
      <div className="flex flex-col justify-center items-center text-gray-600">
        <p className="text-4xl">
          <GiProgression />
        </p>
        <p>Em Breve! Página de progresso em desenvolvimento</p>
      </div>
    </div>
  );
}
export default Progress;
