
import api from 'api';
import { createMap } from 'utils/collection';

export const LOAD_BANKS_PENDING = 'LOAD_BANKS_PENDING';
export const LOAD_BANKS_SUCCEED = 'LOAD_BANKS_SUCCEED';
export const LOAD_BANKS_FAILED = 'LOAD_BANKS_FAILED';


export const loadBanksPending = () => {
    return {
        type: LOAD_BANKS_PENDING
    };
};

export const loadBanksFailed = (error, statusCode) => {
    return {
        type: LOAD_BANKS_FAILED,
        payload: {error, statusCode}
    };
};


export const loadBanksSucceed = (banks) => {
    return {
        type: LOAD_BANKS_SUCCEED,
        payload: {list: banks, map: createMap(banks, 'id')}
    };
};

export const loadBanks = () => {
    return dispatch => {
        loadBanksPending();
        api.loadBanks()
            .then(({entity:{ok, banks}, status:{code: statusCode}}) => {
                if (ok) {
                    dispatch(loadBanksSucceed(banks));
                } else {
                    dispatch(loadBanksFailed(null, statusCode));
                }
            }, ({entity: error, status:{code: statusCode}}) => {
                dispatch(loadBanksFailed(error, statusCode));
            });
    };
};