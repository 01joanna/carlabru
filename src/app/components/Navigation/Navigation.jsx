export default function Navigation() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[80vw] flex-col gap-20  flex bg-transparent text-white">
            <div className="w-1/2 flex flex-col gap-5">
                <h1 className="font-oatmealRegular text-8xl leading-20 w-50">Carla Bru</h1>
                <p className="font-oatmealLight w-4/5 text-xl hidden lg:flex">
                    ART DIRECTOR AND SET DECORATOR
                </p>
            </div>
            <div className="lg:w-1/2 w-full">
                <nav>
                    <ul className="flex flex-col text-lg font-oatmealLight uppercase tracking-wider lg:gap-1 gap-2">
                        <li><a href="/">Todos los proyectos</a></li>
                        <li><a href="/information">Videoclips</a></li>
                        <li><a href="/projects">Publicidad</a></li>
                        <li><a href="/contact">Ficción</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
