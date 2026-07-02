const Button = ( { textoBoton, onClick, colorFondo }) => {
  return (
    <button onClick={onClick} className={`${colorFondo} hover:brightness-90 text-white rounded-full px-8 py-3 font-semibold transition`}>
        {textoBoton}
    </button>
  );
};

export default Button