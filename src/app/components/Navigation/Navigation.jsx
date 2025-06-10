export default function Navigation() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[80vw] flex flex-col gap-20">
            <div className="w-1/2 flex flex-col gap-5">
                <h1 className="font-oatmealRegular text-8xl leading-20 w-50">Carla Bru</h1>
                <p className="font-oatmealLight w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra convallis nisi, sit amet hendrerit mi consectetur id. Nunc id.
                </p>
            </div>
            <div className="w-1/2">
                <nav>
                    <ul className="flex flex-col text-lg font-oatmealLight uppercase tracking-wider">
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
