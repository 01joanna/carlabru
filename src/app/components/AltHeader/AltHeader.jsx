export default function AltHeader() {
    return (
        <header
            className="z-10 w-full h-auto absolute">
                <div className="bg-black">
                    <nav className="">
                        <ul className="flex px-10 py-1 justify-end gap-10 uppercase text-xs tracking-wider bg-transparent text-white">
                            <li>
                                <a href="/" className="">Home</a>
                            </li>
                            <li>
                                <a href="/information" className="">Information</a>
                            </li>
                            <li>
                                <a href="/projects" className="">Projects</a>
                            </li>
                            <li>
                                <a href="/contact" className="">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="absolute z-100 px-10 pt-10 flex flex-col gap-5">
                    <h1 className="uppercase text-white text-[90px] font-ltExtraBold w-20 leading-20">Carla bru </h1>
                    <div>
                        <nav className=" text-white text-2xl uppercase tracking-none leading-7 font-ltLight">
                            <ul>
                                <li>
                                    <a href="/" className="">Todos los proyectos</a>
                                </li>
                                <li>
                                    <a href="/" className="">Ficción</a>
                                </li>
                                <li>
                                    <a href="/" className="">Publicidad</a>
                                </li>
                                <li>
                                    <a href="/" className="">Videoclips</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

        </header>
    )
}