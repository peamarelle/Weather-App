import dotnev from 'dotenv';
dotnev.config();

export const PORT = process.env.PORT || 3000;
export const IP_API_URL = process.env.IP_API_URL;
export const prefix = '/v1';
