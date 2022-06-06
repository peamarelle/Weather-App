export default {
    options: {
        routePrefix: '/documentation',
        swagger: {
            info: {
                title: 'Weather API',
                description: 'Testing the Fastify swagger API',
                version: '0.0.1',
                contact: {
                    email: 'peamarelle@gmail.com'
                },
            },
            servers: [
                {
                    url: 'http://localhost:5000/v1',
                    description: 'Local server'
                }
            ]
            ,
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
                        coord: { type: 'object', properties: { lat: { type: 'number' }, lon: { type: 'number' } } }
                    }
                }
            }
        },
        exposeRoute: true,
    },
    location: {
        schema: {
            description: 'Get the city location data according to ip-api.',
            tags: ['Location'],
            summary: 'Search the location data',
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: {
                            type: 'object',
                            properties: {
                                country: { type: 'string' },
                                regionName: { type: 'string' },
                                city: { type: 'string' },
                                lat: { type: 'number' },
                                lon: { type: 'number' }
                            }
                        }
                    }
                },
                500: {
                    description: 'Error response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: { type: 'object' }
                    }
                }
            },
        }
    },
    weatherWithoutParams: {
        schema: {
            description: 'Get the location data city or the location current according to ip-api and current weather status.',
            tags: ['Weather'],
            summary: 'Search the weather data',
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: {
                            type: 'object',
                            properties: {
                                weather: { type: 'array', items: { type: 'object', properties: { id: { type: 'number' }, main: { type: 'string' }, description: { type: 'string' }, icon: { type: 'string' } } } },
                                main: { type: 'object', properties: { temp: { type: 'number' }, feels_like: { type: 'number' }, temp_min: { type: 'number' }, temp_max: { type: 'number' }, pressure: { type: 'number' }, humidity: { type: 'number' } } },
                                visibility: { type: 'number' },
                                wind: { type: 'object', properties: { speed: { type: 'number' }, deg: { type: 'number' } } },
                                name: { type: 'string' },
                                coord: { type: 'object', properties: { lat: { type: 'number' }, lon: { type: 'number' } } }
                            }
                        }
                    }
                },
                500: {
                    description: 'Error response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: { type: 'object' }
                    }
                },
            },
        }
    },
    weatherWithParam: {
        schema: {
            description: 'Get the location data city or the location current according to city param and current weather status.',
            tags: ['Weather'],
            summary: 'Search the weather data',
            params: {
                type: 'object',
                properties: {
                    city: {
                        type: 'string',
                        description: 'the city identifier, as city'
                    }
                },
                required: ['city']
            },
            response: {
                200: {
                    description: 'Successful response',
                    properties: {
                        status: { type: 'string' },
                        data: {
                            type: 'object',
                            properties: {
                                weather: { type: 'array', items: { type: 'object', properties: { id: { type: 'number' }, main: { type: 'string' }, description: { type: 'string' }, icon: { type: 'string' } } } },
                                main: { type: 'object', properties: { temp: { type: 'number' }, feels_like: { type: 'number' }, temp_min: { type: 'number' }, temp_max: { type: 'number' }, pressure: { type: 'number' }, humidity: { type: 'number' } } },
                                visibility: { type: 'number' },
                                wind: { type: 'object', properties: { speed: { type: 'number' }, deg: { type: 'number' } } },
                                name: { type: 'string' },
                                coord: { type: 'object', properties: { lat: { type: 'number' }, lon: { type: 'number' } } }
                            }
                        }
                    }
                },
                500: {
                    description: 'Error response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: { type: 'object' }
                    }
                },
            },
        }
    },
    forecatsWithoutParams: {
        schema: {
            description: 'Get the location current according to ip-api and the weather status to 5 days.',
            tags: ['Forecast'],
            summary: 'Search forecast data',
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: {
                            type: 'object',
                            properties: {
                                list: {
                                    type: 'array', items: { type: 'object', properties: { dt: { type: 'number' }, main: { type: 'object', properties: { temp: { type: 'number' }, feels_like: { type: 'number' }, temp_min: { type: 'number' }, temp_max: { type: 'number' }, pressure: { type: 'number' }, humidity: { type: 'number' } } }, weather: { type: 'array', items: { type: 'object', properties: { id: { type: 'number' }, main: { type: 'string' }, description: { type: 'string' }, icon: { type: 'string' } } } }, clouds: { type: 'object', properties: { all: { type: 'number' } } }, wind: { type: 'object', properties: { speed: { type: 'number' }, deg: { type: 'number' } } }, sys: { type: 'object', properties: { pod: { type: 'string' } } }, dt_txt: { type: 'string' } } },
                                    city: { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, coord: { type: 'object', properties: { lat: { type: 'number' }, lon: { type: 'number' } } }, country: { type: 'string' }, timezone: { type: 'number' }, sunrise: { type: 'number' }, sunset: { type: 'number' } } }
                                },
                            }
                        }
                    }
                },
                500: {
                    description: 'Error response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: { type: 'object' }
                    }
                },
            },
        }
    },
    forecatsWithParams: {
        schema: {
            description: 'Get the location current according to ip-api and the weather status to 5 days.',
            tags: ['Forecast'],
            summary: 'Search forecast data',
            params: {
                type: 'object',
                properties: {
                    city: {
                        type: 'string',
                        description: 'the city identifier, as city name'
                    }
                },
                required: ['city']
            },
            response: {
                200: {
                    description: 'Successful response',
                    params: {
                        type: 'object',
                        properties: {
                            city: {
                                type: 'string',
                                description: 'the city identifier, as city name'
                            }
                        },
                        required: ['city']
                    },
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: {
                            type: 'object',
                            properties: {
                                list: {
                                    type: 'array', items: { type: 'object', properties: { dt: { type: 'number' }, main: { type: 'object', properties: { temp: { type: 'number' }, feels_like: { type: 'number' }, temp_min: { type: 'number' }, temp_max: { type: 'number' }, pressure: { type: 'number' }, humidity: { type: 'number' } } }, weather: { type: 'array', items: { type: 'object', properties: { id: { type: 'number' }, main: { type: 'string' }, description: { type: 'string' }, icon: { type: 'string' } } } }, clouds: { type: 'object', properties: { all: { type: 'number' } } }, wind: { type: 'object', properties: { speed: { type: 'number' }, deg: { type: 'number' } } }, sys: { type: 'object', properties: { pod: { type: 'string' } } }, dt_txt: { type: 'string' } } },
                                    city: { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, coord: { type: 'object', properties: { lat: { type: 'number' }, lon: { type: 'number' } } }, country: { type: 'string' }, timezone: { type: 'number' }, sunrise: { type: 'number' }, sunset: { type: 'number' } } }
                                },
                            }
                        }
                    }
                },
                500: {
                    description: 'Error response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        data: { type: 'object' }
                    }
                },
            },
        }
    },
}