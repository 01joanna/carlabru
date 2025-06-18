export default function Information() {
    return (
        <section className="font-helvetica tracking-wider lg:mx-30 mx-10 my-36 text-sm w-full bg-black text-white">
            <div className="flex lg:flex-row flex-col lg:gap-[10rem] gap-20">
                <div className="lg:w-1/3 w-3/4 flex lg:flex-row flex-col gap-20 font-oatmealLight text-xl ">
                    <div>
                        Carla Bru Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis felis id imperdiet convallis. Nullam lacinia mattis tellus, sed eleifend mauris commodo sollicitudin. Aenean egestas venenatis enim. Ut leo sem, lobortis vitae odio ut, aliquet ornare nisl. <br /> <br />Fusce rutrum tincidunt aliquam. Sed scelerisque vehicula urna, et laoreet sapien placerat quis. Nunc elit lorem, dictum vel erat efficitur, ornare porta eros. Nulla a dapibus turpis. Integer semper posuere sodales. Donec suscipit faucibus facilisis. Proin tempor semper ex, eu eleifend nisl scelerisque non. </div>
                    <div>

                        <div className="grid grid-cols-2 grid-rows-2 gap-1 lg:w-1/2 w-full">
                            <div>2022</div>
                            <div>Lorem ipsum</div>
                            <div className="row-start-2">2021</div>
                            <div className="row-start-2">Lorem ipsum </div>
                            <div className="row-start-3">2020</div>
                            <div className="row-start-3">Lorem Ipsum</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-3/4 flex flex-col gap-20 font-oatmealExtraLight text-lg">
                    <div className="flex flex-col gap-3">
                        <b className="uppercase pb-6 font-oatmealMedium">Projects</b>
                        <div className="flex flex-row gap-20">
                            <p>Año</p>
                            <p>Proyecto, producido por Lorem Ipsum</p>
                        </div>
                        <div className="flex flex-row gap-20">
                            <p>Año</p>
                            <p>Proyecto, producido por Lorem Ipsum</p>
                        </div>
                        <div className="flex flex-row gap-20">
                            <p>Año</p>
                            <p>Proyecto, producido por Lorem Ipsum</p>
                        </div>
                        

                    </div>
                    <div>
                        <b className="uppercase font-oatmealRegular">Contact</b>
                        <p>Email</p>
                        <p>Instagram</p>
                        <p>Vimeo</p>
                        <p>CV</p>
                    </div>
                </div>
            </div>
        </section>
    )
}