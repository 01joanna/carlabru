export default function AltHeader() {
    return (
        <header
            className="z-10 w-full h-auto relative">
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
        </header>
    )
}