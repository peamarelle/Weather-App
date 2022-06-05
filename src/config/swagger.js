export const options = {
    routePrefix: '/documentation',
    swagger: {
        info: {
            title: 'Weather API',
            description: 'Testing the Fastify swagger API',
            version: '0.0.1'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'Location', description: 'Returns the city location data according to ip-api.' },
            { name: 'Weather', description: 'Returns the location data city or the location current according to ip-api and current weather status.' },
            { name: 'Forecast', description: 'Returns the location data city or the location current according to ip-api and the weather status to 5 days.' }
        ],
        definitions: {
            Location: {
                type: 'object',
                properties: {
                    country: { type: 'string' },
                    regionName: { type: 'string' },
                    city: { type: 'string' },
                    lat: { type: 'number' },
                    lon: { type: 'number' }
                }
            },
            Weather: {
                type: 'object',
                properties: {
                    weather: { type: 'array', items: { type: 'object', properties: { id: { type: 'number' }, main: { type: 'string' }, description: { type: 'string' }, icon: { type: 'string' } } } },
                    main: { type: 'object', properties: { temp: { type: 'number' }, feels_like: { type: 'number' }, temp_min: { type: 'number' }, temp_max: { type: 'number' }, pressure: { type: 'number' }, humidity: { type: 'number' } } },
                    visibility: { type: 'number' },
                    wind: { type: 'object', properties: { speed: { type: 'number' }, deg: { type: 'number' } } },
                    name: { type: 'string' },
                }
            }
        }
    },
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    uiHooks: {
        onRequest: function (request, reply, next) { next() },
        preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true
}