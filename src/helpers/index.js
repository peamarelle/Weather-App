export const isInReservedRange = (ip = '') => {
    const splitedIp = ip.split('.'); 
    return splitedIp.length > 1 ? splitedIp[0] === '127' : false;
}