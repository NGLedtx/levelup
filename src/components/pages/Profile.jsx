import { FaUser } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent h-screen">
      <div className="flex flex-col justify-center items-center text-gray-600">
        <p className="text-4xl">
          <FaUser />
        </p>
        <p>Em Breve! Página de perfil em desenvolvimento</p>
      </div>
    </div>
  );
}
export default Profile;
