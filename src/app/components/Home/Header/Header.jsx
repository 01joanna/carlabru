"use client";

export default function Header() {
    return (
        <header
            className="sticky top-0 z-50 w-full flex flex-col text-xs tracking-widest px-20 bg-white py-7"
        >
            <div className="flex justify-between w-[85%]">
                <div className="w-1/2 -ml-10">
                    <p>
                        Carla Bru is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum ipsum quis sit odio perferendis itaque fugiat ad natus unde. Ratione
                        cupiditate obcaecati tenetur delectus vero omnis temporibus commodi inventore eveniet.
                    </p>
                </div>

                <div className="w-1/2 flex justify-between">
                    <div>buendia@carlabru.com</div>
                    <div className="flex gap-4">
                        <a href="/" className="cursor-pointer underline">(Home)</a>
                        <a href="/information">
                            (Información)
                        </a>
                        <a href="/projects" className="cursor-pointer underline">(Proyectos)</a>
                        <a>ES / EN</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
