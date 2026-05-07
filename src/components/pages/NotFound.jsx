import { BiSolidError } from "react-icons/bi";
function NotFound(){
    return(
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen">
            <BiSolidError className="text-6xl text-gray-400" />
            <p className="text-2xl text-gray-400">404 - Página não encontrada</p>
        </div>
    )
}
export default NotFound;