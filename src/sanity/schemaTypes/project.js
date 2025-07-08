export default {
    name: 'project',
    title: 'Proyecto',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nombre',
            type: 'string'
        },
        {
            name: 'by',
            title: 'Por',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Descripción',
            type: 'text'
        },
        {
            name: 'year',
            title: 'Año',
            type: 'number'
        },
        {
            name: 'video',
            title: 'Video (URL)',
            type: 'url'
        },
        {
            name: 'image',
            title: 'Imagen principal',
            type: 'image'
        },
        {
            name: 'images',
            title: 'Galería de imágenes',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'category',
            title: 'Categoría',
            type: 'string'
        }
    ]
}