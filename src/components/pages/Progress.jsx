import { GiProgression } from "react-icons/gi";

function Progress() {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent h-screen">
      <div className="flex flex-col justify-center items-center text-gray-600">
        <p className="text-4xl">
          <GiProgression />
        </p>
      </div>
    </div>
  );
}
export default Progress;
