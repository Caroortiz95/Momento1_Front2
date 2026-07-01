const Button = ( { textoBoton }) => {
  return (
    <button className="bg-[#1F5E4A] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#1B4A3A] transition">
        {textoBoton}
    </button>
  );
};

export default Button