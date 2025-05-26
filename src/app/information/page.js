export default function Information() {
    return (
        <section className="font-helvetica tracking-wider mx-30 my-20 text-sm w-full">
            <div className="flex gap-[20rem]">
                <div className="w-1/3 text-justify flex flex-col gap-20">
                    <div>
                        Carla Bru Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis felis id imperdiet convallis. Nullam lacinia mattis tellus, sed eleifend mauris commodo sollicitudin. Aenean egestas venenatis enim. Ut leo sem, lobortis vitae odio ut, aliquet ornare nisl. Phasellus finibus lacus et mi viverra, in gravida dolor varius. Duis et est quam. Maecenas a sollicitudin enim, finibus imperdiet velit. Sed venenatis felis nec bibendum ultrices. Proin posuere consequat tellus non efficitur. Vivamus imperdiet ultrices mollis. Proin vitae bibendum ante. <br /> <br />Fusce rutrum tincidunt aliquam. Sed scelerisque vehicula urna, et laoreet sapien placerat quis. Nunc elit lorem, dictum vel erat efficitur, ornare porta eros. Nulla a dapibus turpis. Integer semper posuere sodales. Donec suscipit faucibus facilisis. Proin tempor semper ex, eu eleifend nisl scelerisque non. Maecenas metus nunc, fringilla eu est ut, fermentum feugiat augue. Nunc suscipit nunc vel dui pharetra sodales. Vestibulum tincidunt diam at turpis scelerisque vehicula. Vestibulum dui leo, cursus in massa tincidunt, iaculis interdum ligula. Mauris mattis fringilla ante.</div>
                    <div>

                        <div className="grid grid-cols-2 grid-rows-2 gap-1 w-1/2">
                            <div>2022</div>
                            <div>Lorem ipsum</div>
                            <div className="row-start-2">2021</div>
                            <div className="row-start-2">Lorem ipsum </div>
                            <div className="row-start-3">2020</div>
                            <div className="row-start-3">Lorem Ipsum</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-20">
                    <div className="flex flex-col gap-3">
                        <b className="uppercase pb-6">Projects</b>
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
                        <b className="uppercase">Contact</b>
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