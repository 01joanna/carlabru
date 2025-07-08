export default function Information() {
    return (
        <section className="font-helvetica tracking-wider lg:mx-30 mx-10 my-36 text-sm w-full bg-transparent text-white">
            <div className="flex lg:flex-row flex-col lg:gap-[10rem] gap-20">
                <div className="lg:w-1/3 w-3/4 flex flex-col gap-20 font-oatmealLight text-xl tracking-wider ">
                    <div>
                        ¡Hello!<br />
                        Soy Carla. <br /><br />Directora de Arte, ambientadora y diseñadora gráfica. Un culo inquieto.<br /><br />
                        Me sensibiliza lo que ocurre a mi alrededor, me nutren todas las expresiones creativas. Juego con la mezcla de todo lo que he aprendido y experimentado desde la ilustración, la pintura, el diseño. Construir y desarrollar proyectos me surge de una forma natural y para mí es compromiso personal. Busco alternativas donde no las hay, para cumplir las metas que en equipo nos proponemos y siempre destacando en resultados ingeniosos, únicos y visualmente atractivos.<br /><br />
                        Te lo pienso y te lo hago, me pringo las manos y la mente.<br />
                        Si todo esto te resuena, ¿hablamos?

                    </div>
                    <div>

                        {/* <div className="grid grid-cols-2 grid-rows-2 gap-1 lg:w-1/2 w-full">
                            <div>2022</div>
                            <div>Lorem ipsum</div>
                            <div className="row-start-2">2021</div>
                            <div className="row-start-2">Lorem ipsum </div>
                            <div className="row-start-3">2020</div>
                            <div className="row-start-3">Lorem Ipsum</div>
                        </div> */}
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
                    {/* <div>
                        <b className="uppercase font-oatmealRegular">Contact</b>
                        <p>Email</p>
                        <p>Instagram</p>
                        <p>Vimeo</p>
                        <p>CV</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}