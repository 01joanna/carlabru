import proyectos from "../data/data.js";

export default function ProyectoPage({ params }) {
    const { id } = params;
    const proyecto = proyectos.find(p => p.id === parseInt(id));

    if (!proyecto) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-black uppercase font-ltExtraLight tracking-wider">
                <p>Proyecto no encontrado</p>
            </div>
        );
    }

    return (
        <section className="flex flex-col bg-black text-white mt-30">
            {/* Video + info */}
            <div className="flex justify-between w-full px-6 sm:px-10 md:px-20 py-20">
                <div className="flex w-full max-w-[90rem] mx-auto gap-10">
                    {/* Video */}
                    <div className="flex-1 aspect-video overflow-hidden">
                        <iframe
                            src={proyecto.video}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>

                    {/* Texto */}
                    <div className="w-[30%] flex flex-col justify-end">
                        <h1 className="text-6xl font-ltBold">{proyecto.titulo}</h1>
                        {proyecto.by && (
                                <p className="text-lg font-ltMedium">{proyecto.by}</p>
                            )}
                        <div className="flex flex-col font-ltExtraLight gap-0 text-lg mt-4">
                            <p>{proyecto.año}</p>
                            {proyecto.direccion && (
                                <p>Dirección: {proyecto.direccion}</p>
                            )}
                            {proyecto.produccion && (
                                <p>Producción: {proyecto.produccion}</p>
                            )}

                            {proyecto.arte && (
                            <p>Dirección de arte: {proyecto.arte}</p>
                            )}

                            {proyecto.designer && (
                                <p>Diseño: {proyecto.designer}</p>
                            )}
                                                        {proyecto.assistantArt && (
                                <p>Asistencia de arte: {proyecto.assistantArt}</p>
                            )}
                            {proyecto.setDecorator && (
                                <p>Decoración de set: {proyecto.setDecorator}</p>
                            )}
                            {proyecto.assistantDecorator && (
                                <p>Asistencia de decoración: {proyecto.assistantDecorator}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Galería si hay imágenes */}
            {proyecto.imagenes?.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-10 pb-20">
                    {proyecto.imagenes.map((img, i) => (
                        <div key={i} className="overflow-hidden">
                            <img
                                src={img}
                                alt={`Imagen ${i + 1} del proyecto ${proyecto.titulo}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
