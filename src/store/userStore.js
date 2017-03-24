
import ListStore from './ListStore'
const store = new ListStore('user');

const defaultState = [{
    "id" : 1,
    "login": "admin",
    "password": "adminpass",
    "idToken": "Admin secret :-)"
}, {
    "id" : 2,
    "login": "user",
    "password": "userpass",
    "idToken": "User secret :-o"
}, {
    "id" : 3,
    "login": "Ivan",
    "password": "Ivanpass",
    "idToken": "Ivan secret ;<)"
}];

if (!store.isItUsed()) {
    defaultState.forEach(item => store.setItem(item));
}

export default store;