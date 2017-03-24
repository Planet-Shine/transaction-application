
import ListStore from './ListStore'
const store = new ListStore('transaction');

const defaultState = [
    {"id":1, "amount": 100, "bankId": 1},
    {"id":2, "amount": 200, "bankId": 7},
    {"id":3, "amount": 300, "bankId": 21},
    {"id":4, "amount": 900, "bankId": 25},
    {"id":5, "amount": 1500, "bankId": 17},
    {"id":6, "amount": 50, "bankId": 20},
    {"id":7, "amount": 90, "bankId": 21},
    {"id":8, "amount": 10, "bankId": 8},
    {"id":9, "amount": 500, "bankId": 7},
    {"id":10, "amount": 1000, "bankId": 7},
    {"id":11, "amount": 900, "bankId": 3},
    {"id":12, "amount": 150, "bankId": 5},
    {"id":13, "amount": 120, "bankId": 4},
    {"id":14, "amount": 2500, "bankId": 3},
    {"id":15, "amount": 30, "bankId": 2},
    {"id":16, "amount": 250, "bankId": 9},
    {"id":17, "amount": 23, "bankId": 10},
    {"id":18, "amount": 5, "bankId": 8},
    {"id":19, "amount": 189, "bankId": 7},
    {"id":20, "amount": 130, "bankId": 2},
    {"id":21, "amount": 14, "bankId": 14},
    {"id":22, "amount": 180, "bankId": 22},
    {"id":23, "amount": 30, "bankId": 27},
    {"id":24, "amount": 25, "bankId": 28},
    {"id":25, "amount": 78, "bankId": 30},
    {"id":26, "amount": 15, "bankId": 8},
    {"id":27, "amount": 12, "bankId": 11},
    {"id":28, "amount": 10, "bankId": 14},
    {"id":29, "amount": 20, "bankId": 13},
    {"id":30, "amount": 60, "bankId": 5},
    {"id":31, "amount": 70, "bankId": 6},
    {"id":32, "amount": 784, "bankId": 19},
    {"id":33, "amount": 10000, "bankId": 26},
    {"id":34, "amount": 901, "bankId": 25},
    {"id":35, "amount": 150, "bankId": 24},
    {"id":36, "amount": 100, "bankId": 22},
    {"id":37, "amount": 260, "bankId": 11},
    {"id":38, "amount": 1000000, "bankId": 15},
    {"id":39, "amount": 10, "bankId": 15},
    {"id":40, "amount": 105, "bankId": 3}
];

if (!store.isItUsed()) {
    defaultState.forEach(item => store.setItem(item));
}

export default store;