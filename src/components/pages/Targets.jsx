import { TbTargetArrow } from "react-icons/tb";

function Targets() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen">
      <div className="flex flex-col justify-center items-center text-gray-600">
        <p className="text-4xl">
          <TbTargetArrow />
        </p>
        <p>Em Breve! Página de metas em desenvolvimento</p>
      </div>
    </div>
  );
}
export default Targets;
