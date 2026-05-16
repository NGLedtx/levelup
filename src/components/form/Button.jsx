function Button({ icon, text }) {
  return (
    <div>
      <button
        type="submit"
        className="w-full p-2 rounded-lg bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 mt-3 text-center flex items-center justify-center gap-2 text-slate-900 transition-colors font-bold shadow-amber-500/30 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700"
      >
        <div>{icon}</div>
        <span>{text}</span>
      </button>
    </div>
  );
}
export default Button;