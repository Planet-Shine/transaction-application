
export const createMap = (array, propName) => {
    const result = {};
    array.forEach(item => result[item[propName]] = item);
    return result;
};
