

import rest from 'rest';
import mime from 'rest/interceptor/mime';
import cookies from 'browser-cookies';
import defaultRequest from 'rest/interceptor/defaultRequest';

export default (idToken=cookies.get('idToken')) => {
    var headers = {};
    if (idToken) {
        cookies.set('idToken', idToken, {expires: 1});
        headers = { Authorization: `Bearer ${idToken}` };
    }
    const client = rest
        .wrap(mime, { mime: 'application/json'})
        .wrap(defaultRequest, {headers});
    return client;
};
export const deleteToken = () => {
    cookies.erase('idToken');
};

export const getIdToken = () => cookies.get('idToken');