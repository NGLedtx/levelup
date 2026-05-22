function Modal({ onClose, currentCharacter, children }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center transition-all duration-300 scale-100 opacity-100">
      <div className={`bg-white w-full max-w-lg p-4 rounded-2xl shadow-xl relative ${currentCharacter.color}`}>
        <div className="w-full max-w-lg relative">
          <div className="flex justify-end">
            <button className="text-white font-bold text-xl" onClick={onClose}>X</button>
          </div>
          <div className="flex items-center justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
