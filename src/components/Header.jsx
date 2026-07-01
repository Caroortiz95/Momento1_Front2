const Header = () => {
    return (
        <header className="bg-[#F6F2E9] border-b border-[#DED6C5] py-8 flex justify-center">
            <div className="flex">
                <h1 className="text-5xl font-title font-black text-[#15201B]">Pensavo</h1>
                <span className="text-5xl font-title font-black text-[#E8643C]">·</span>
                <h1 className="text-5xl font-title font-black text-[#15201B] pr-20">peggio</h1>
            </div>
            <nav className="mt-5">
                <ul className="flex justify-center gap-10 text-[#15201B] font-medium">
                    <li className="cursor-pointer hover:text-[#1F5E4A] transition-colors">Inicio</li>
                    <li className="cursor-pointer hover:text-[#1F5E4A] transition-colors">Menú</li>
                    <li className="cursor-pointer hover:text-[#1F5E4A] transition-colors">Promociones</li>
                    <li className="cursor-pointer hover:text-[#1F5E4A] transition-colors">Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header