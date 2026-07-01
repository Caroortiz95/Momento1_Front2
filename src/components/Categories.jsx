import menu from "../db/menu.js"
import MenuCard from "./MenuCard"

const Categories = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {menu.map((menu) => (
                    <MenuCard
                        key={menu.codigo}
                        nombre={menu.nombre}
                        descripcion={menu.descripcion}
                        precio={menu.precio}
                    />
                ))}
            </div>
        </>
    )
}

export default Categories