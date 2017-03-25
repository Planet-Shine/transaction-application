
import createClient, {deleteToken, getIdToken} from './client'
var client;
updateClient();

function updateClient(idToken) {
    client = createClient(idToken);
}

import transactionStore from 'store/transactionStore';
import userStore from 'store/userStore';
import bankStore from 'store/bankStore';

function isAuthorised() {
    const clientIdToken = getIdToken();
    const user = userStore.getAll().find(({idToken}) =>
        idToken === clientIdToken
    );
    return !!user;
}

const api = {
    login(requestedLogin, requestedPassword) {
        const user = userStore.getAll().find(({login, password}) => {
            return requestedLogin === login &&
                requestedPassword === password;
        });
        if (user) {
            return client({
                path: './data/ok.json',
                method: 'GET'
            }).then(response => {
                const { idToken } = user;
                if (idToken) {
                    updateClient(idToken);
                }
                response.entity.idToken = idToken;
                return Promise.resolve(response);
            }, response => Promise.reject(response));
        } else {
            return Promise.reject({
                entity: "Unauthorised",
                status: {code: 401}
            });
        }
    },
    logout() {
        deleteToken();
        updateClient();
    },
    createTransaction(bankId, amount) {
        if (!isAuthorised()) {
            return Promise.reject({
                entity: "User unauthorised",
                status: {code: 401}
            });
        }
        return client({
            path: './data/ok.json',
            method: 'GET'
        }).then(response => {
            const transaction = {
                id: transactionStore.getNextId(),
                bankId,
                amount
            };
            transactionStore.setItem(transaction);
            response.entity.transaction = transaction;
            return Promise.resolve(response);
        }, response => Promise.reject(response));
    },
    loadTransactions() {
        if (!isAuthorised()) {
            return Promise.reject({
                entity: "User unauthorised",
                status: {code: 401}
            });
        }
        return client({
            path: './data/ok.json',
            method: 'GET'
        }).then(response => {
            response.entity.transactions = transactionStore.getAll();
            return Promise.resolve(response);
        }, response => Promise.reject(response));
    },
    deleteTransaction(id) {
        if (!isAuthorised()) {
            return Promise.reject({
                entity: "User unauthorised",
                status: {code: 401}
            });
        }
        return client({
            path: './data/ok.json',
            method: 'GET'
        }).then(response => {
            transactionStore.removeItem(id);
            return Promise.resolve(response);
        }, response => Promise.reject(response));
    },
    loadBanks() {
        if (!isAuthorised()) {
            return Promise.reject({
                entity: "User unauthorised",
                status: {code: 401}
            });
        }
        return client({
            path: './data/ok.json',
            method: 'GET'
        }).then(response => {
            response.entity.banks = bankStore.getAll();
            return Promise.resolve(response);
        }, response =>  Promise.reject(response));
    }
};

export default api;