const MenuCard = ({ codigo, nombre, precio }) => {
    return (

        <article className="bg-white rounded-xl shadow-md p-5">
            <span>{codigo}</span>
            <h2 className="text-xl font-bold">Plato</h2>
            <h4 className="text-xl font-bold">{nombre}</h4>
            <p className="text-green-600">{precio}</p>
        </article>
    )
}

export default MenuCard
