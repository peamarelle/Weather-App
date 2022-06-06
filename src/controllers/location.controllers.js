import { findLocation } from './common.js'

export const getLocationByIp = async (request, reply, next) => {
    try {
        const location = await findLocation(request);
        reply.code(200).send({ status: 'Ok', data: location });
    } catch (error) {
        next(error);
    }
}