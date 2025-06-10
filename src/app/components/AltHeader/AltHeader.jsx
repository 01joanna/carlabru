export default function AltHeader() {
    return (
        <header className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-auto h-auto text-md font-oatmealLight uppercase tracking-wider flex mt-14 gap-64">
            <nav className="">
                <ul className="flex gap-20 justify-end border border-gray-400 rounded-lg px-7 py-2">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/information">Información</a></li>
                    <li><a href="/projects">Proyectos</a></li>
                </ul>
            </nav>
            <div className="uppercase border border-gray-400 rounded-lg px-7 py-2">Contacto</div>
        </header>
    )
}
