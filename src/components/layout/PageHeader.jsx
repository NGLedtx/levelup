import { AiFillFire } from "react-icons/ai";
import Formatdate from "../utils/FormatDate";
function PageHeader() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col text-white p-5  w-full max-w-md bg-gray-800/50 rounded-xl shadow-2xl p-4-b">
        <div className="flex  items-center gap-7 ">
          <div className="text-3xl">
            <img src="/mago1.png" className="rounded-full max-w-40" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">Level 3</h1>
              <p className="font-bold text-purple-600"> 240 XP</p>
            </div>
            <div className="w-40 h-3 bg-gray-700 rounded-full mt-2">
              <div className="w-24 h-3 bg-purple-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2 font-bold">
              Continue evoluindo!
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div>
            <p className="text-gray-400 text-sm">{Formatdate()}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-purple-400 text-sm"> 7 dias</p>
            <AiFillFire className="text-purple-500 text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageHeader;
