

export const validEmailReg = /^[a-zA-Z0-9\._\-]+@[a-zA-Z0-9\-]+\.(?:[a-zA-Z0-9\-\.]+)+$/i;

export const filledStringReg = /\S/;

export const floatReg = /^\s*(\d+)?(?:\.|,)?(\d+)?\s*$/;

export const dateReg =  /^(\d\d?)\/(\d\d?)\/(\d\d\d\d), (\d\d?):(\d\d?):(\d\d?) (\w\w)?$/;
//'3/16/2017, 1:06:45 PM'


export const parsePrice = (price) => {
    const priceMatch = String(price).match(floatReg);
    if (priceMatch === null || !filledStringReg.test(price)) {
        return null;
    }
    const integerPart = priceMatch[1] || '';
    var decimalPart = parseInt(priceMatch[2] || '');
    decimalPart = (parseInt(decimalPart, 10) && `.${decimalPart}`) || '';
    return parseFloat(parseFloat(`${integerPart}${decimalPart}`).toFixed(2));
};

export const formatPrice = (price) => {
    var price = parsePrice(price);
    if (price === null) {
        return null;
    }
    price = (price % 1) ? price.toFixed(2) : price;
    return String(price).replace('.', ',');
};

export const formatAmount = (price) => {
    var sign = price < 0? '-' : '';
    price = parsePrice(Math.abs(price));
    if (price === null) {
        return null;
    }
    price = (price % 1) ? price.toFixed(2) : price;
    return sign + String(price).replace('.', ',');
};

export const formatDate = (date) => {
    var match = date.match(dateReg);
    if (match === null) {
        return null;
    }
    const d = new Date(
        match[3],
        match[1] - 1,
        match[2],
        (match[7] === 'PM' ? 12 : 0) + parseInt(match[4], 10),
        match[5],
        match[6]
    );
    function twoDigits(int) {
        return ('0' + int).slice(-2);
    }
    return `${d.getFullYear()}.${twoDigits(d.getMonth() + 1)}.${twoDigits(d.getDate())} ${twoDigits(d.getHours())}:${twoDigits(d.getMinutes())}:${twoDigits(d.getSeconds())}`;
};