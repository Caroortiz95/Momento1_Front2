import Button from "./Button"

const MenuCard = ({ codigo, nombre, descripcion, precio }) => {
    return (

        <article className="bg-white rounded-2xl border border-[#DED6C5] p-6 hover:-translate-y-1 hover:shadow-xl transition-all">
            <span>{codigo}</span>
            <h2 className="text-2xl font-body font-semibold text-[#15201B]">{nombre}</h2>
            <p className="font-body text-xl  text-[#15201B]">{descripcion}</p>
            <p className="font-mono text-[#1F5E4A] font-semibold">{precio}</p>
            <Button textoBoton="Agregar al pedido" />
        </article>
    )
}

export default MenuCard
