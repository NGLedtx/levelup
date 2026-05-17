function Input({ type, text, placeholder, name, value, icon, onChange}) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <div className="relative">
        <div className="absolute left-2 top-3 text-gray-600">{icon}</div>
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="text-gray-800 pl-8 outline-none focus:ring-2 focus:ring-gray-500 rounded h-10"
          required
        />
      </div>
    </div>
  );
}
export default Input;
